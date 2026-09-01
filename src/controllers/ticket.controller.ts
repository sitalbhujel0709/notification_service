import {response, type Request,type Response} from "express";
import { errorResponseBody, successResponseBody } from "../utils/responseBody";
import { createTicketService, getAllTicketsService, getTicketById } from "../services/ticket.service";

export const createTicketController = async (req:Request,res:Response)=>{
    try {
        const {subject,content,recipient} = req.body;
        const response = await createTicketService({
            subject,
            content,
            recipient
        })
        successResponseBody.data = response;
        successResponseBody.message = "ticket created successfully";
        return res.status(201).json(successResponseBody)
    } catch (error:any) {
        if(error.code === 422 ){
            errorResponseBody.err = error;
            return response.status(error.code).json(errorResponseBody)
        }
        errorResponseBody.err = error;
        return response.status(500).json(errorResponseBody)
    }
}

export const getAllTicketsController = async (req:Request,res:Response) => {
    try {
        const response = await getAllTicketsService();
        successResponseBody.data = response;
        successResponseBody.message = "Tickets fetched successfully";
        return res.status(200).json(successResponseBody)
    } catch (error:any) {
        if(error.code === 404){
            errorResponseBody.err = error;
            return res.status(error.code).json(errorResponseBody)
        }
        errorResponseBody.err = error;
        errorResponseBody.message = "Failed to fetch tickets";
        return res.status(500).json(errorResponseBody)
    }
}

export const getTicketByIdController = async (req:Request,res:Response)=>{
    try {
        const ticket = await getTicketById(req.params.id as string);
        successResponseBody.data = ticket;
        successResponseBody.message = "Ticket fetched successfully";
        return res.status(200).json(successResponseBody)
    } catch (error:any) {
        if(error.code === 404){
            errorResponseBody.err = error;
            return res.status(error.code).json(errorResponseBody)
        }
        errorResponseBody.err = error;
        errorResponseBody.message = "Failed to fetch ticket";
        return res.status(500).json(errorResponseBody)
    }
}