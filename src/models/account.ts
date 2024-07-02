import mongoose, { Schema } from "mongoose";

export interface IAccount extends Document{
    username:string,
    password:string,
  

}

const accountSchema: Schema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

},{versionKey:'myVersionKey'})

// connect Account with collection "accounts"
const Account = mongoose.models.Account || mongoose.model("Account",accountSchema,"account")

export default Account;