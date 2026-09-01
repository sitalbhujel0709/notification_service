import express from "express";
import 'dotenv/config';
import ticketRouter from "./routes/ticket.route";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(`/notification/api/v1/ticket`,ticketRouter)

export default app;