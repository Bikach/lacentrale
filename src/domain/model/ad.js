"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var scam_1 = require("./scam");
var ruleScamFailMessage_1 = require("./ruleScamFailMessage");
var Ad = /** @class */ (function () {
    function Ad(contacts, creationDate, price, publicationOptions, reference, car) {
        var _this = this;
        this.contacts = contacts;
        this.creationDate = creationDate;
        this.price = price;
        this.publicationOptions = publicationOptions;
        this.reference = reference;
        this.car = car;
        this.searchScam = function (hasRegisterNameAuthorized) {
            var registerNameScam = hasRegisterNameAuthorized ? ruleScamFailMessage_1.EMPTY_FAIL_MESSAGE : ruleScamFailMessage_1.REGISTER_NUMBER_FAIL_MESSAGE;
            var rules = __spreadArray(__spreadArray(__spreadArray([], _this.validateFullName(), true), _this.validateEmail(), true), [registerNameScam], false);
            var finalRules = rules.filter(function (rule) { return rule !== ruleScamFailMessage_1.EMPTY_FAIL_MESSAGE; });
            var hasScam = finalRules.length > 0;
            return new scam_1["default"](_this.reference, hasScam, finalRules);
        };
        this.validateFullName = function () { return _this.contacts.validateFullName(); };
        this.validateEmail = function () { return _this.contacts.validateEmail(); };
        this.getRegisterNumber = function () { return _this.car.getRegisterNumber(); };
    }
    return Ad;
}());
exports["default"] = Ad;
