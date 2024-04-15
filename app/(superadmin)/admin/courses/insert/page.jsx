import CourseModel from '@/models/CourseModel';
import connectDb from '@/utils/connectDb'
import Link from "next/link";
import AddCourse from '../../ui/AddCourse';
import CategoryModel from '@/models/CategoryModel';

const page = async () => {
    await connectDb();

    let categories = await CategoryModel.find();
    categories = JSON.parse(JSON.stringify(categories));

    return (
        <div className='flex flex-col gap-5 w-full px-[10%]'>
            <div className='flex justify-between w-full items-center'>
                <h1 className='my-3 text-3xl font-semibold text-slate-500'>Insert Course</h1>
                <Link href="/admin/courses" className="text-white bg-green-600 px-3 py-2 rounded">Go Back</Link>
            </div>

            <div className='flex gap-5'>
                <AddCourse categories={categories}/>
            </div>
        </div>
    )
}

export default page