
import connectDB from "@/lib/mongoDB/dbConnect";
import Config from "@/models/config";
import { NextResponse } from "next/server";

export async function GET(req:Request){

    await connectDB();
    try{
        const config = await Config.find().exec()

        return NextResponse.json(config)
    }catch(e:any){
        return NextResponse.json({error:e.error})
    }
}