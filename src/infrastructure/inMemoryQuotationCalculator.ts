import QuotationCalculator from "../domain/gateway/quotationCalculator";
import Car from "../domain/model/car";

export class InMemoryQuotationCalculator implements QuotationCalculator {

    calcul(car: Car): number{
        return 3500;
    }
}