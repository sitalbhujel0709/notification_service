import app from "./src/app";

import mongoose from "mongoose";
import { mailerCron } from "./src/crons/cron";

const PORT = process.env.PORT;

const DB_URL = process.env.NODE_ENV === "development" ? process.env.DB_URL : process.env.PROD_DB_URL;

app.listen(PORT,async()=>{
    try {
        console.log(`Notification service is running on port ${PORT}`)
        await mongoose.connect(DB_URL as string);
        console.log("Notification service connected to database")
        mailerCron()
    } catch (error) {
        console.log("Notification service is not connected to database")
        console.log(error)
    }
})