import cron from "node-cron";
import Ticket from "../models/ticket.model";
import { transport } from "../services/email.service";



export const mailerCron = () => {

    cron.schedule('*/2 * * * *', async () => {
        console.log("cron running")
        const notificationsToBeSent = await Ticket.find({
            status: "PENDING"
        })
        notificationsToBeSent.forEach(notification => {
            try {
                const mailData = {
                    from: 'mba@support.com',
                    to: notification.recipient,
                    subject: notification.subject,
                    text: notification.content
                }
                transport.sendMail(mailData, async (err, data) => {
                    if (err) {
                        await Ticket.findByIdAndUpdate(notification._id, {
                            status: "FAILED"
                        })
                    }
                    else {
                        await Ticket.findByIdAndUpdate(notification._id, {
                            status: "SUCCESS"
                        })
                    }
                })
            } catch (error) {
                console.error(error)
            }
        })
    })
}