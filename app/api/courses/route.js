import CourseModel from "@/models/CourseModel";
import connectDb from "@/utils/connectDb";
import { NextResponse } from "next/server";

export async function POST(req){
    await connectDb();
    const {title} = await req.json();
    try{
        const course = await CourseModel.create({title})
        return NextResponse.json(course);
    }
    catch(error){
        return new NextResponse("Internal Error",{status:500});
    }
    
}