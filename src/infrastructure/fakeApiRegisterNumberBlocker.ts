import RegisterNumberBlocker from "../domain/gateway/registerNumberBlocker";

export default class FakeApiRegisterNumberBlocker implements RegisterNumberBlocker {
    block(registerNumber: string): boolean {
        return setTimeout(() => registerNumber === "AA123AA", 50) as unknown as boolean;
    }
}