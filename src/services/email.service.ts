import nodemailer from "nodemailer"
interface MailData {
    from:string;
    to:string;
    subject:string;
    content:string;
}

 export const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.GOOGLE_APP_EMAIL,
        pass:process.env.GOOGLE_APP_PASSWORD
    }
})


