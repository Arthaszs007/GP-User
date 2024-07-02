
import connectDB from "@/lib/mongoDB/dbConnect";
import Game from "@/models/game";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    
    const {searchParams} = new URL(req.url);
    const ids = searchParams.get("ids");

    const gameids = ids?.split("/");
    if(!gameids) throw new Error("Paramas is empty")

    await connectDB();

        
    try{

        const games = await Game.find({id:{$in:gameids}}).exec();
        return NextResponse.json(games,{status:200})

    }catch(e:any){
        return NextResponse.json({error:e.error},{status:400})
    }

}       