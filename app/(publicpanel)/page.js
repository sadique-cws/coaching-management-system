import Image from "next/image";
import Hero from "./ui/Hero";
import AboutVision from "./ui/AboutVision";
import CourseSection from "./ui/CourseSection";
import connectDb from "@/utils/connectDb";
import CourseModel from "@/models/CourseModel";

export default async function Home() {
  await connectDb();
  let courses = await CourseModel.find({}).populate("category");
  return (
    <>
      <Hero/>
      <AboutVision/>
      <CourseSection courses={courses}/>
    </>
  );
}
