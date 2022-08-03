enum RuleScamFailMessage {
    FIRSTNAME_FAIL_MESSAGE = "rule:::firstname:length",
    LASTNAME_FAIL_MESSAGE = "rule:::lastname:length",
    ALPHA_RATE_FAIL_MESSAGE = "rule:::alpha_rate",
    NUMBER_RATE_FAIL_MESSAGE = "rule:::number_rate",
    REGISTER_NUMBER_FAIL_MESSAGE = "rule:::registrernumber::blocklist",
    EMPTY_FAIL_MESSAGE = ""
}

export const {
    NUMBER_RATE_FAIL_MESSAGE,
    ALPHA_RATE_FAIL_MESSAGE,
    LASTNAME_FAIL_MESSAGE,
    FIRSTNAME_FAIL_MESSAGE,
    EMPTY_FAIL_MESSAGE,
    REGISTER_NUMBER_FAIL_MESSAGE
} = RuleScamFailMessage