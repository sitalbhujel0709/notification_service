import app from "./src/app";

import mongoose from "mongoose";

const PORT = process.env.PORT;

app.listen(PORT,async()=>{
    try {
        console.log(`Notification service is running on port ${PORT}`)
        await mongoose.connect(process.env.DB_URL as string);
        console.log("Notification service connected to database")
    } catch (error) {
        console.log("Notification service is not connected to database")
        console.log(error)
    }
})