import CourseModel from "@/models/CourseModel";
import connectDb from "@/utils/connectDb"
import { NextResponse } from "next/server";

export const PATCH = async (req, {params}) => {

    await connectDb();
    let {courseId} = params;
    
    try{
        let course = await CourseModel.findByIdAndUpdate(courseId, {status:"Published"});
        return NextResponse.json(course);
    }
    catch(error){
        console.log("COURSE PUBLISH ERROR", error);
        return new NextResponse("something went wrong", {status:500});
    }



}