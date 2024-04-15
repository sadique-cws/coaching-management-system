import CourseModel from '@/models/CourseModel';
import connectDb from '@/utils/connectDb'
import CallingCourses from '../ui/CallingCourses';
import Link from "next/link";

const page = async () => {
    await connectDb();

    let courses = await CourseModel.find().populate("category");
    courses = JSON.parse(JSON.stringify(courses));

    return (
        <div className='flex flex-col gap-5 w-full px-[10%]'>
            <div className='flex justify-between w-full items-center'>
                <h1 className='my-3 text-3xl font-semibold text-slate-500'>ALl Courses ({courses.length})</h1>
                <Link href="/admin/courses/insert" className="text-white bg-green-600 px-3 py-2 rounded">Add Course</Link>
            </div>

            <div className='flex gap-5'>
                <CallingCourses courses={courses} />
            </div>
        </div>
    )
}

export default page