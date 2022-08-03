"use strict";
exports.__esModule = true;
exports.FakeApiQuotationCalculator = void 0;
var FakeApiQuotationCalculator = /** @class */ (function () {
    function FakeApiQuotationCalculator() {
    }
    FakeApiQuotationCalculator.prototype.calcul = function (car) {
        return setTimeout(function () { return 3500; }, 50);
    };
    return FakeApiQuotationCalculator;
}());
exports.FakeApiQuotationCalculator = FakeApiQuotationCalculator;
