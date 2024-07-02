import connectDB from "@/lib/mongoDB/dbConnect";
import Account, { IAccount } from "@/models/account";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET(req :Request){

    const {searchParams} = new URL(req.url);
    const username = searchParams.get("username");
    const password = searchParams.get("password");

    if(!username || !password) throw new Error("Paramas is empty")
  

    await connectDB();

    try{

        const user = await Account.findOne({username:username,password:password}).exec();

        return NextResponse.json(user,{status:200})
    }catch(e :any){
        return NextResponse.json({error:e.error},{status:200})
    }
    
}

export async function POST(req:Request){

    const account :IAccount = await req.json();

    if(!account.username||!account.password) throw new Error("paramas is empty")
    
    await connectDB();

    try{
        const isExist = await Account.findOne({username:account.username}).exec();

        if(isExist) return NextResponse.json("username exist",{status:200})
        
        await Account.insertMany([account]);
        
        return NextResponse.json("inserted",{status:200})

    }catch(e :any){
        return NextResponse.json({error:e.error},{status:400})
    }
    
}