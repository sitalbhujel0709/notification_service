import cron from "node-cron";
import Ticket from "../models/ticket.model";
import { sendEmail } from "../services/email.service";

cron.schedule('*/2 * * * *',async ()=> {
    const notificationsToBeSent = await Ticket.find({
        status:"PENDING"
    })
    notificationsToBeSent.forEach(notification => {
        try {
            const mailData={
                from: 'mba@support.com',
                to:notification.recipient,
                subject:notification.subject,
                content:notification.content
            }
            sendEmail(mailData);
        } catch (error) {
            console.error(error)
        }
    })
})