export default interface RegisterNumberBlocker {
    block(registerNumber: string): boolean
}