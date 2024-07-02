import connectDB from "@/lib/mongoDB/dbConnect";
import Game from "@/models/game";
import { NextResponse } from "next/server";


export async function GET(req:Request){

    const {searchParams} = new URL(req.url)
    const value = searchParams.get("value")

    if(!value) throw new Error("Paramas is empty")

    await connectDB();
    // fuzzy match in mongodb
    try{
        const games = await Game.aggregate([
            {
                $search:{
                    index:"gameName",
                    text:{
                        path:"name",
                        query:value,
                        fuzzy:{},
                    }
                }                
            },
            {
                $project:{
                    name:1,
                    id:1,
                    release:1,
                    developer:1,
                    platform:1,
                    images:1,
                    _id:0,

                }
            }
        ]).exec();
        return NextResponse.json(games,{status:200});

    }catch(e:any){
        return NextResponse.json({error:e.error},{status:400});
       
    }


}