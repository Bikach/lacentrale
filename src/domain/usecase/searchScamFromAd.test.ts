import SearchScamFromAd from "./searchScamFromAd";
import {InMemoryQuotationCalculator} from "../../infrastructure/inMemoryQuotationCalculator";
import InMemoryRegisterNumber from "../../infrastructure/inMemoryRegisterNumber";
import Scam from "../model/scam";
import {describe, it, expect} from "vitest";
import AdBuilder from "../model/builder/adBuilder";
import ContactsBuilder from "../model/builder/contactsBuilder";
import CarBuilder from "../model/builder/CarBuilder";


describe("ensures that the ad isn't a scam", () => {

    const quotationCalculator = new InMemoryQuotationCalculator()
    const registerNumber = new InMemoryRegisterNumber()
    const searchScamFromAd = new SearchScamFromAd(quotationCalculator, registerNumber);

    describe("contracts rules", ()=> {
        it("should have not a firstname with the minimum number of letters allowed", ()=> {
            const contacts = new ContactsBuilder().withFirstname("Ab").withLastname("abc").withEmail("AZED2342--@@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", true, ["rule:::firstname:length"]));
        })

        it("should have a firstname with the minimum number of letters allowed", ()=> {
            const contacts = new ContactsBuilder().withFirstname("Abc").withLastname("abc").withEmail("AZED2342--@@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", false, []));
        })

        it("should have not a lastname with the minimum number of letters allowed", ()=> {
            const contacts = new ContactsBuilder().withFirstname("Abc").withLastname("ab").withEmail("AZED2342--@@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", true, ["rule:::lastname:length"]));
        })

        it("should have a lastname with the minimum number of letters allowed", ()=> {
            const contacts = new ContactsBuilder().withFirstname("Abc").withLastname("abc").withEmail("AZED2342--@@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", false, []));
        })

        it("should have not a firstname and lastname with the minimum number of letters allowed", ()=> {
            const contacts = new ContactsBuilder().withFirstname("Ab").withLastname("ab").withEmail("AZED2342--@@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", true, ["rule:::firstname:length", "rule:::lastname:length"]));
        })
    })

    describe("emails rules", ()=> {
        it("should have not the minimum percentage of alphanumeric characters before @", ()=> {
            const contacts = new ContactsBuilder().withFirstname("Abc").withLastname("abc").withEmail("aze2234---@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", true, ["rule:::alpha_rate"]));
        })

        it("should have the minimum percentage of alphanumeric characters before @", ()=> {
            const contacts = new ContactsBuilder().withFirstname("Abc").withLastname("abc").withEmail("az12345kel@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", false, []));
        })

        it("should have not the minimum percentage of numeric characters before @", ()=> {
            const contacts = new ContactsBuilder().withFirstname("Abc").withLastname("abc").withEmail("azeR23fr--@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", true, ["rule:::number_rate"]));
        })

        it("should have the minimum percentage of numeric characters before @", ()=> {
            const contacts = new ContactsBuilder().withFirstname("Abc").withLastname("abc").withEmail("1234fkdjel@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", false, []));
        })

    })

    describe("register number rules", ()=> {
        it("should have a unauthorized register number", () => {
            const contacts = new ContactsBuilder().withFirstname("Abc").withLastname("abc").withEmail("az12345kel@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123BB").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", true, ["rule:::registrernumber::blocklist"]));
        })

        it("should have a authorized register number", () => {
            const contacts = new ContactsBuilder().withFirstname("Abc").withLastname("abc").withEmail("az12341kel@centrale.com").build()
            const car = new CarBuilder().withRegisterNumber("AA123AA").build()
            const ad = new AdBuilder().withContact(contacts).withReference("B300053623").withCar(car).build()

            let scam = searchScamFromAd.search(ad);

            expect(scam).toEqual(new Scam("B300053623", false, []));
        })
    })
})