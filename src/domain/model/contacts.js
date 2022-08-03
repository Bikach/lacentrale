"use strict";
exports.__esModule = true;
var ruleScamFailMessage_1 = require("./ruleScamFailMessage");
var Contacts = /** @class */ (function () {
    function Contacts(firstName, lastName, email, phone1) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone1 = phone1;
        this.validateFullName = function () { return [_this.validateFirstname(), _this.validateLastname()]; };
        this.validateFirstname = function () { return _this.firstName.length <= Contacts.MINIMUM_NUMBER_ALLOWED
            ? ruleScamFailMessage_1.FIRSTNAME_FAIL_MESSAGE
            : ruleScamFailMessage_1.EMPTY_FAIL_MESSAGE; };
        this.validateLastname = function () { return _this.lastName.length <= Contacts.MINIMUM_NUMBER_ALLOWED
            ? ruleScamFailMessage_1.LASTNAME_FAIL_MESSAGE
            : ruleScamFailMessage_1.EMPTY_FAIL_MESSAGE; };
        this.validateEmail = function () {
            var firstPart = _this.email.split(Contacts.EMAIL_SEPARATOR)[Contacts.FIRST_PART_BEFORE_EMAIL_SEPARATOR];
            var totalChar = firstPart.length;
            var alphaCharFound = firstPart.match(/[\w]/g);
            var numericCharFound = firstPart.match(/[\d]/g);
            var alphaCharFoundSafe = (alphaCharFound === null || alphaCharFound === void 0 ? void 0 : alphaCharFound.length) ? alphaCharFound.length : 0;
            var numericCharFoundSafe = (numericCharFound === null || numericCharFound === void 0 ? void 0 : numericCharFound.length) ? numericCharFound.length : 0;
            var alphaRateResult = _this.calculateRate(alphaCharFoundSafe, totalChar) <= Contacts.ALPHA_RATE_LIMIT_ALLOWED ? ruleScamFailMessage_1.ALPHA_RATE_FAIL_MESSAGE : ruleScamFailMessage_1.EMPTY_FAIL_MESSAGE;
            var numericRateResult = _this.calculateRate(numericCharFoundSafe, totalChar) <= Contacts.NUMERIC_RATE_LIMIT_ALLOWED ? ruleScamFailMessage_1.NUMBER_RATE_FAIL_MESSAGE : ruleScamFailMessage_1.EMPTY_FAIL_MESSAGE;
            return [alphaRateResult, numericRateResult];
        };
        this.calculateRate = function (charNumberFound, totalCharFound) { return charNumberFound / totalCharFound * 100; };
    }
    Contacts.MINIMUM_NUMBER_ALLOWED = 2;
    Contacts.ALPHA_RATE_LIMIT_ALLOWED = 70;
    Contacts.NUMERIC_RATE_LIMIT_ALLOWED = 30;
    Contacts.FIRST_PART_BEFORE_EMAIL_SEPARATOR = 0;
    Contacts.EMAIL_SEPARATOR = "@";
    return Contacts;
}());
exports["default"] = Contacts;
