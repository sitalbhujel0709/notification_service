import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    content: {
        type:String,
        required:true
    },
    recipient: {
        type:String,
        required:true
    },
    status:{
        type:String,
        enum: {
            values:["PENDING","SUCCESS","FAILED"],
            message:"Invalid message status"
        },
        default:"PENDING"
    }
},{timestamps:true});

const Ticket = mongoose.model("Ticket",ticketSchema);

export default Ticket;