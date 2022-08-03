"use strict";
exports.__esModule = true;
var FakeApiRegisterNumberBlocker = /** @class */ (function () {
    function FakeApiRegisterNumberBlocker() {
    }
    FakeApiRegisterNumberBlocker.prototype.block = function (registerNumber) {
        return setTimeout(function () { return registerNumber === "AA123AA"; }, 50);
    };
    return FakeApiRegisterNumberBlocker;
}());
exports["default"] = FakeApiRegisterNumberBlocker;
