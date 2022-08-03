"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(make, model, version, category, registerNumber, milease) {
        var _this = this;
        this.make = make;
        this.model = model;
        this.version = version;
        this.category = category;
        this.registerNumber = registerNumber;
        this.milease = milease;
        this.getRegisterNumber = function () { return _this.registerNumber; };
    }
    return Car;
}());
exports["default"] = Car;
