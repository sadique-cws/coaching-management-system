import CourseModel from "@/models/CourseModel";
import connectDb from "@/utils/connectDb";
import { NextResponse } from "next/server";

export const PATCH = async (req, {params}) => {
    try{
        await connectDb();
        let values = await req.json();
        let {courseId} = params;
        let course = await CourseModel.findByIdAndUpdate(courseId,values);

        return NextResponse.json(course);
    }
    catch(error){
        console.log("[COurse Update Error] " + error);
        return new NextResponse("Internal Error",{status:500});
    }
}

export const DELETE = async (req, {params}) => {
    try{
        await connectDb();
        let {courseId} = params;
        let course = await CourseModel.findByIdAndDelete(courseId);

        return NextResponse.json(course);
    }
    catch(error){
        console.log("[COURSE DELETE] ERROR ", error)
        return new NextResponse("Internal Error", {status: 500});
    }
}