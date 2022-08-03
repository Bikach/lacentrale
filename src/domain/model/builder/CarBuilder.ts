import Car from "../car";

export default class CarBuilder {
    private make: string
    private model: string
    private version: string
    private category: string
    private registerNumber: string
    private milease: string

    build = () => new Car(
        this.make,
        this.model,
        this.version,
        this.category,
        this.registerNumber,
        this.milease
    )

    withMake = (make: string) => {
        this.make = make
        return this;
    }

    withModel = (model: string) => {
        this.model = model
        return this;
    }

    withVersion = (version: string) => {
        this.version = version
        return this;
    }

    withCategory = (category: string) => {
        this.category = category
        return this;
    }

    withRegisterNumber= (registerNumber: string) => {
        this.registerNumber = registerNumber
        return this;
    }

    withMilease = (milease: string) => {
        this.milease = milease
        return this;
    }
}