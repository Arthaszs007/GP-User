import mongoose, { Document, Schema } from "mongoose";

export interface IRank extends Document{
    id:string,
    name:string,
    children:string
}

const RankSchema: Schema = new mongoose.Schema({
    id:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    children:{
        type:String,
        required:true
    }
})

const Rank = mongoose.models.Rank|| mongoose.model<IRank>("Rank",RankSchema,"rank")

export default Rank