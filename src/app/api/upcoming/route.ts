import connectDB from "@/lib/mongoDB/dbConnect";
import Upcoming from "@/models/upcoming";

import { NextResponse } from "next/server";

export async function GET(req:Request){

    await connectDB();
    try{
        const upcoming =await Upcoming.find().exec();

        return NextResponse.json(upcoming,{status:200})
    }catch(e:any){
        return NextResponse.json({error:e.error},{status:400})
    }
}