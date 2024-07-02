import connectDB from "@/lib/mongoDB/dbConnect";
import About from "@/models/about";
import { NextResponse } from "next/server";


export async function GET(req:Request){
    await connectDB()
    try{
        const about = await About.find().exec()
        return NextResponse.json(about)
    }catch(e:any){
        return NextResponse.json({error:e.error},{status:400})
    }
}