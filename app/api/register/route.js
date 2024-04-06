import UserModel from "@/models/UserModel";
import connectDb from "@/utils/connectDb";
import bcrypt from "bcrypt";
import { NextResponse } from 'next/server'

export async function POST(req){
    // dbconnection

    try{
        await connectDb();
        const {name, email, password} = await req.json();
        const  user = await UserModel.findOne({email});
        if(user){
            return BaseNextResponse.json({
                status: 400,
                message: "Email already exists"
            })
        } 

        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({name, email, password: hashedPassword})
        return NextResponse.json({message: "register success"},{status:201})
    }
    catch(error){
        return NextResponse.json({message:error.message},{status:500});
    }
}