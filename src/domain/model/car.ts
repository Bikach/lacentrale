export default class Car {
    constructor(private readonly make: string,
                private readonly model: string,
                private readonly version: string,
                private readonly category: string,
                private readonly registerNumber: string,
                private readonly milease: string) {}

    getRegisterNumber = () => this.registerNumber
}