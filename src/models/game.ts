import mongoose, { Document, Schema } from "mongoose";

export interface IGame extends Document{
    id:string,
    name:string,
    description:string,
    release:string,
    developer:string,
    genre:string,
    platform:string,
    scores:string,
    images:string
}

const  gameSchema : Schema = new mongoose.Schema({
    id:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    release:{
        type: String,
        required:true,
    },
    developer:{
        type: String,
        required:true,
    },
    genre:{
        type: String,
        required:true,
    },
    platform:{
        type: String,
        required:true,
    },
    scores:{
        type: String,
        required:true,
    },
    images:{
        type: String,
        required:true,
    },
});
// connect Game with collection "games"
const Game =mongoose.models.Game || mongoose.model<IGame>("Game",gameSchema,"games");

export default Game;