import connectDB from "@/lib/mongoDB/dbConnect";
import News from "@/models/news";
import { NextResponse } from "next/server";

export async function GET(req:Request){

    await connectDB();
    try{
        const news = await News.find().exec();

        return NextResponse.json(news)
    }catch(e:any){
        return NextResponse.json({error:e.error},{status:400})
    }

   
}