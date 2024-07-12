import connectDB from "@/lib/mongoDB/dbConnect";
import Rank from "@/models/rank";
import { NextResponse } from "next/server";


export async function GET(req:Request) {

    await connectDB();
    try{

        const ranks = await Rank.find().exec();
        
        return NextResponse.json(ranks,{status:200})

    }catch(e:any){

        return NextResponse.json({error:e.error},{status:400})
    }

    
    
}