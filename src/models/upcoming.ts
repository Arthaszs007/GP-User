import mongoose, { Document, Schema } from "mongoose";

export interface IUpcoming extends Document{
    release:string,
    name:string,
    score:string
}

const UpcomingSchema : Schema= new  mongoose.Schema({
    release:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    score:{
        type:String,
        required:true
    }
})

const Upcoming = mongoose.models.Upcoming|| mongoose.model<IUpcoming>("Upcoming",UpcomingSchema,"upcoming");

export default Upcoming