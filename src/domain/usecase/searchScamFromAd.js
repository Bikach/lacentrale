"use strict";
exports.__esModule = true;
var SearchScamFromAd = /** @class */ (function () {
    function SearchScamFromAd(quotationCalculator, licencePlateBlocker) {
        var _this = this;
        this.quotationCalculator = quotationCalculator;
        this.licencePlateBlocker = licencePlateBlocker;
        this.search = function (ad) {
            var licencePlateAuthorized = _this.licencePlateBlocker.block(ad.getRegisterNumber());
            return ad.searchScam(licencePlateAuthorized);
        };
    }
    return SearchScamFromAd;
}());
exports["default"] = SearchScamFromAd;
