import Car from "../model/car";

export default interface QuotationCalculator {
    calcul(vehicule: Car): number;
}