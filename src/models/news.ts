import mongoose, { Document, Schema} from "mongoose";

export interface INews extends Document{
    id:string,
    title:string,
    time:string,
    image:string,
}

const newsSchema: Schema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const News = mongoose.models.News ||  mongoose.model<INews>("News",newsSchema,"news");

export default News;