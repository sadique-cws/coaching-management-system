"use server"

import CategoryModel from "@/models/CategoryModel";
import CourseModel from "@/models/CourseModel";
import UserModel from "@/models/UserModel";
import connectDb from "@/utils/connectDb";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { writeFile} from "fs/promises";
import {join} from "path";

export  async function handleApprove(formData){
    let id = formData.get("_id");
    // db connection
    await connectDb();

    // update data 
    let record = await UserModel.findByIdAndUpdate(id, {status: true});

    redirect("/admin/students");
}


//category delete work
export const handleDelete = async (formData) => {
    await connectDb();
    let id = formData.get("_id");
    id = JSON.parse(id);

    let course = await CourseModel.deleteMany({category:id})

    let category = await CategoryModel.findByIdAndDelete(id);

    redirect("/admin/category");
}
//category insertion action
export const handleSubmitCategory = async(formdata) => {
    await connectDb();

    let name = formdata.get("name");
    let description = formdata.get("description");

    let category = new CategoryModel({name, description}).save();

    redirect("/admin/categories");

}

//insert course 
export const handleSubmitCourse = async (formData) => {
    "use server"
    await connectDb();

    let title = formData.get("title");
    let description = formData.get("description");
    let fee = formData.get("fee");
    let duration = formData.get("duration");
    let category = formData.get("category");
    let startDate = formData.get("startDate");
    let endDate = formData.get("endDate");
    let difficulty = formData.get("difficulty");
    let status = formData.get("status");
    let prerequisites = formData.get("prerequisites");        
    
    // image work
    let image = formData.get("image");

    let bytes = await image.arrayBuffer();
    let buffer = Buffer.from(bytes);
    let path = join("./public", "course_images", image.name);
    await writeFile(path, buffer);

    let course = await  new CourseModel({ title, description, fee, duration, category, image:image.name, startDate,endDate, difficulty, status, prerequisites }).save();

    let courseId = course._id;

    let categoryUpdate = await CategoryModel.findByIdAndUpdate(category,{$push:{courses:courseId}});
    redirect("/admin/courses");
};

//course delete action

export const handleCourseDelete = async (courseId,formdata) => {
    let course = await CourseModel.findByIdAndDelete(courseId);
}