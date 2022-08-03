import {
    NUMBER_RATE_FAIL_MESSAGE,
    ALPHA_RATE_FAIL_MESSAGE,
    LASTNAME_FAIL_MESSAGE,
    FIRSTNAME_FAIL_MESSAGE,
    EMPTY_FAIL_MESSAGE
} from './ruleScamFailMessage'

export type Phone = {
    value: string
}

export default class Contacts {

    private static readonly MINIMUM_NUMBER_ALLOWED = 2;
    private static readonly ALPHA_RATE_LIMIT_ALLOWED = 70;
    private static readonly NUMERIC_RATE_LIMIT_ALLOWED = 30;
    private static readonly FIRST_PART_BEFORE_EMAIL_SEPARATOR = 0;
    private static readonly EMAIL_SEPARATOR = "@";

    constructor(private readonly firstName: string,
                private readonly lastName: string,
                private readonly email: string,
                private readonly phone1: Phone) {
    }

    validateFullName = () => [this.validateFirstname(), this.validateLastname()]

    private validateFirstname = () => this.firstName.length <= Contacts.MINIMUM_NUMBER_ALLOWED
        ? FIRSTNAME_FAIL_MESSAGE
        : EMPTY_FAIL_MESSAGE
    

    private validateLastname = () => this.lastName.length <= Contacts.MINIMUM_NUMBER_ALLOWED
        ? LASTNAME_FAIL_MESSAGE
        : EMPTY_FAIL_MESSAGE


    validateEmail = () => {
        const firstPart = this.email.split(Contacts.EMAIL_SEPARATOR)[Contacts.FIRST_PART_BEFORE_EMAIL_SEPARATOR]

        const totalChar = firstPart.length
        const alphaCharFound = firstPart.match(/[\w]/g) ;
        const numericCharFound = firstPart.match(/[\d]/g) ;

        const alphaCharFoundSafe = alphaCharFound?.length ? alphaCharFound.length : 0
        const numericCharFoundSafe = numericCharFound?.length ? numericCharFound.length : 0

        const alphaRateResult = this.calculateRate(alphaCharFoundSafe, totalChar) <= Contacts.ALPHA_RATE_LIMIT_ALLOWED ? ALPHA_RATE_FAIL_MESSAGE : EMPTY_FAIL_MESSAGE
        const numericRateResult = this.calculateRate(numericCharFoundSafe, totalChar) <= Contacts.NUMERIC_RATE_LIMIT_ALLOWED ? NUMBER_RATE_FAIL_MESSAGE : EMPTY_FAIL_MESSAGE

        return [alphaRateResult, numericRateResult]
    }

    private calculateRate = (charNumberFound: number, totalCharFound: number) => charNumberFound / totalCharFound * 100

}