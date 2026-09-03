import { Notification } from "./interfaces/Notification"

const not1: Notification = {
id: 1,
recipient: 1,
message: "oi",

send() {
    console.log("Sending notification to Leonardo: Your order has been shipped!")
},
}