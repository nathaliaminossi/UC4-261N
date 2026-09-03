export interface Notification {
    getId(): number;
    getRecipient(): number;
    getMessage(): string;

    send(): void
}