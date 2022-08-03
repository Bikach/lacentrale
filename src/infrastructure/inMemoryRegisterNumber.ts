import RegisterNumberBlocker from "../domain/gateway/registerNumberBlocker";

export default class InMemoryRegisterNumber implements RegisterNumberBlocker {
    block(registerNumber: string): boolean {
        return registerNumber === "AA123AA";
    }
}