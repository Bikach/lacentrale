import Contacts, {Phone} from "../contacts";

export default class ContactsBuilder {
    private firstName: string
    private lastName: string
    private email: string
    private phone1: Phone

    build = () => new Contacts(
        this.firstName,
        this.lastName,
        this.email,
        this.phone1,
    )

    withFirstname = (firstName: string) => {
        this.firstName = firstName
        return this;
    }

    withLastname = (lastName: string) => {
        this.lastName = lastName
        return this;
    }

    withEmail = (email: string) => {
        this.email = email
        return this;
    }

    withPhone = (phone1: Phone) => {
        this.phone1 = phone1
        return this;
    }
}