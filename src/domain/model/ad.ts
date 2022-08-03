import Contacts from "./contacts";
import Car from "./car";
import Scam from "./scam";
import {EMPTY_FAIL_MESSAGE, REGISTER_NUMBER_FAIL_MESSAGE} from "./ruleScamFailMessage";

export default class Ad  {
    constructor(private readonly contacts: Contacts,
                private readonly creationDate: string,
                private readonly price: string,
                private readonly publicationOptions: string[],
                private readonly reference: string,
                private readonly car: Car) {}

    searchScam = (hasUnblockedRegisterNumber: boolean) => {
        const registerNumberScam = hasUnblockedRegisterNumber ? EMPTY_FAIL_MESSAGE : REGISTER_NUMBER_FAIL_MESSAGE
        const rules = this.scamFormatRules(registerNumberScam);
        const hasScams = rules.length > 0

        return new Scam(this.reference, hasScams, rules)
    }

    private scamFormatRules = (registerNumberScam: string) =>
        [
            ...this.contacts.validateFullName(),
            ...this.contacts.validateEmail(),
            registerNumberScam
        ].filter(rule => rule !== EMPTY_FAIL_MESSAGE);

    getRegisterNumber = () => this.car.getRegisterNumber()
}