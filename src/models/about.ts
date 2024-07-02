import mongoose, { Schema } from "mongoose";

export interface IAbout extends Document{
    display:string,
    image:string
}

const AboutSchema :Schema = new mongoose.Schema({
    display:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    }
})

const About = mongoose.models.About|| mongoose.model<IAbout>("About",AboutSchema,"about")

export default About