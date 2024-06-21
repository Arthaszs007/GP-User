import mongoose from "mongoose";

const connection:{isConnected?:number}={};

async function connectDB(){
    try{
        // if existed, return
        if(connection.isConnected){
        
            return;
        }
        
        // create the connection
        const db = await mongoose.connect(process.env.MONGO_URL!)
    
        connection.isConnected =db.connections[0].readyState;
    }catch(e){
        console.log(e)
    }

}

export default connectDB;