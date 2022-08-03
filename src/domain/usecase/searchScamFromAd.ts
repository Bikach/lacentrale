import RegisterNumberBlocker from "../gateway/registerNumberBlocker";
import QuotationCalculator from "../gateway/quotationCalculator";
import Ad from "../model/ad";

export default class SearchScamFromAd {
    constructor(private readonly quotationCalculator: QuotationCalculator,
                private readonly registerNumberBlocker: RegisterNumberBlocker) {}

    search = (ad: Ad) => {
        const licencePlateAuthorized = this.registerNumberBlocker.block(ad.getRegisterNumber())
        return ad.searchScam(licencePlateAuthorized)
    }
}
