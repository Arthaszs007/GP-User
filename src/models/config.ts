import mongoose, { Schema } from "mongoose";

export interface IConfig extends Document{
    pop:string,
    editors:string,
    upcome:string,
    news:string,
    release:string,
}

const configSchema :Schema = new mongoose.Schema({
    pop:{
        type: String,
        required:true
    },
    editors:{
        type: String,
        required:true
    },
    upcome:{
        type: String,
        required:true
    },
    news:{
        type: String,
        required:true
    },
    release:{
        type: String,
        required:true
    }
})
// connect Config with collection "config"
const Config = mongoose.models.Config || mongoose.model<IConfig>("Config",configSchema,"config")

export default Config