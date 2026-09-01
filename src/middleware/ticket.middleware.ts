import type { Request,Response,NextFunction } from "express";

export const validateCreateTicket = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const {subject,content,recipient} = req.body;
        if(!subject || !content || !recipient){
            return res.status(400).json({
                success:false,
                message:"Please provide all the required fields",
                error:{
                    subject:"Subject is required",
                    content:"Content is required",
                    recipient:"Recipient is required"
                }
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal server error while validating create ticket",
            error
        })
    }
}