import SearchScamFromAd from "./domain/usecase/searchScamFromAd";
import {FakeApiQuotationCalculator} from "./infrastructure/FakeApiQuotationCalculator";
import FakeApiRegisterNumberBlocker from "./infrastructure/fakeApiRegisterNumberBlocker";
import CarBuilder from "./domain/model/builder/CarBuilder";
import ContactsBuilder from "./domain/model/builder/contactsBuilder";
import AdBuilder from "./domain/model/builder/adBuilder";
const { contacts, creationDate, price, publicationOptions, reference, car } = require("./ressources/ad.json");

const quotationCalculator = new FakeApiQuotationCalculator()
const registerNumberBlocker = new FakeApiRegisterNumberBlocker()
const searchScamFromAd = new SearchScamFromAd(quotationCalculator, registerNumberBlocker);

const carCreated = new CarBuilder()
    .withMake(car.make)
    .withModel(car.model)
    .withVersion(car.version)
    .withCategory(car.category)
    .withRegisterNumber(car.registerNumber)
    .withMilease(car.milease).build()

const contactsCreated = new ContactsBuilder()
    .withFirstname(contacts.firstName)
    .withLastname(contacts.lastName)
    .withEmail(contacts.email)
    .withPhone(contacts.phone1)
    .build()

const adCreated = new AdBuilder()
    .withContact(contactsCreated)
    .withCreationDate(creationDate)
    .withPrice(price)
    .withPublicationOptions(publicationOptions)
    .withReference(reference)
    .withCar(carCreated)
    .build()

const scams = searchScamFromAd.search(adCreated)

console.log(scams)