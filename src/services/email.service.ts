import nodemailer from "nodemailer"
interface MailData {
    from:string;
    to:string;
    subject:string;
    content:string;
}

const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.GOOGLE_APP_EMAIL,
        pass:process.env.GOOGLE_APP_PASSWORD
    }
})


export const sendEmail = async (mailData:MailData)=>{
    try {
        const info = await transport.sendMail({
            from:mailData.from,
            to:mailData.to,
            subject:mailData.subject,
            text:mailData.content
        })
        return info
    } catch (error) {
        console.log(error)
        throw error;
    }
}