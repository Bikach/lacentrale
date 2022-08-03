"use strict";
exports.__esModule = true;
exports.REGISTER_NUMBER_FAIL_MESSAGE = exports.EMPTY_FAIL_MESSAGE = exports.FIRSTNAME_FAIL_MESSAGE = exports.LASTNAME_FAIL_MESSAGE = exports.ALPHA_RATE_FAIL_MESSAGE = exports.NUMBER_RATE_FAIL_MESSAGE = void 0;
var RuleScamFailMessage;
(function (RuleScamFailMessage) {
    RuleScamFailMessage["FIRSTNAME_FAIL_MESSAGE"] = "rule:::firstname:length";
    RuleScamFailMessage["LASTNAME_FAIL_MESSAGE"] = "rule:::lastname:length";
    RuleScamFailMessage["ALPHA_RATE_FAIL_MESSAGE"] = "rule:::alpha_rate";
    RuleScamFailMessage["NUMBER_RATE_FAIL_MESSAGE"] = "rule:::number_rate";
    RuleScamFailMessage["REGISTER_NUMBER_FAIL_MESSAGE"] = "rule:::registrernumber::blocklist";
    RuleScamFailMessage["EMPTY_FAIL_MESSAGE"] = "";
})(RuleScamFailMessage || (RuleScamFailMessage = {}));
exports.NUMBER_RATE_FAIL_MESSAGE = RuleScamFailMessage.NUMBER_RATE_FAIL_MESSAGE, exports.ALPHA_RATE_FAIL_MESSAGE = RuleScamFailMessage.ALPHA_RATE_FAIL_MESSAGE, exports.LASTNAME_FAIL_MESSAGE = RuleScamFailMessage.LASTNAME_FAIL_MESSAGE, exports.FIRSTNAME_FAIL_MESSAGE = RuleScamFailMessage.FIRSTNAME_FAIL_MESSAGE, exports.EMPTY_FAIL_MESSAGE = RuleScamFailMessage.EMPTY_FAIL_MESSAGE, exports.REGISTER_NUMBER_FAIL_MESSAGE = RuleScamFailMessage.REGISTER_NUMBER_FAIL_MESSAGE;
