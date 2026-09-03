import { Notification } from "./Notification"

export class SmsNotification implements Notification {
    id: number;
     recipient: number;
     message: string

    public constructor(id: number, recipient: number, message: string) {
        this.id = id
        this.recipient = recipient
        this.message = message

    }
    public send(): void {
        console.log("Sending SMS to +55 51 99999-9999: Your verification code is 4821.")
    }
}