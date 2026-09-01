import { Router } from "express";
import { createTicketController, getAllTicketsController, getTicketByIdController } from "../controllers/ticket.controller";
import { validateCreateTicket } from "../middleware/ticket.middleware";

const ticketRouter = Router();

ticketRouter.post(`/`,validateCreateTicket,createTicketController)
ticketRouter.get(`/`,getAllTicketsController)
ticketRouter.get(`/:id`,getTicketByIdController)
export default ticketRouter