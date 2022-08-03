import Ad from "../ad";
import Contacts from "../contacts";
import Car from "../car";

export default class AdBuilder {
    private contacts: Contacts
    private creationDate: string
    private price: string
    private publicationOptions: string[]
    private reference: string
    private car: Car

    build = () => new Ad(
        this.contacts,
        this.creationDate,
        this.price,
        this.publicationOptions,
        this.reference,
        this.car
    )

    withContact = (contacts: Contacts) => {
        this.contacts = contacts
        return this;
    }

    withCreationDate = (creationDate: string) => {
        this.creationDate = creationDate
        return this;
    }

    withPrice = (price: string) => {
        this.price = price
        return this;
    }

    withPublicationOptions = (publicationOptions: string[]) => {
        this.publicationOptions = publicationOptions
        return this;
    }

    withReference= (reference: string) => {
        this.reference = reference
        return this;
    }

    withCar = (car: Car) => {
        this.car = car
        return this;
    }
}