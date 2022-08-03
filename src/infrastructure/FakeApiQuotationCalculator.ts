import QuotationCalculator from "../domain/gateway/quotationCalculator";
import Car from "../domain/model/car";

export class FakeApiQuotationCalculator implements QuotationCalculator {
    calcul(car: Car) {
        return  setTimeout(() => 3500, 50) as unknown as number
    }
}