import Ticket from "../models/ticket.model";
interface createTicketDTO {
    subject: string,
    content: string,
    recipient: string,
    status?: "PENDING" | "SUCCESS" | "FAILED"
}
export const createTicketService = async (data: createTicketDTO) => {
    try {

        const ticket = await Ticket.create(data);
        return ticket
    } catch (error:any) {
        if(error.name === "ValidationError"){
            let err:any = {};
            Object.keys(error.errors).forEach(key => {
                err[key] = error.errors[key].message
            })
            throw {err,code:422}
        }
        throw error;
    }
}

export const getAllTicketsService = async ()=>{
    try {
        const tickets = await Ticket.find({});
        if(!tickets || tickets.length === 0){
            throw {err:"No tickets found",code:404}
        }
        return tickets
    } catch (error:any) {
        throw error;
    }
}

export const getTicketById = async (id:string) => {
    try {
        const ticket = await Ticket.findById(id);
        if(!ticket){
            throw {err:"Ticket not found",code:404}
        }
        return ticket
    } catch (error:any) {
        throw error;
    }
}