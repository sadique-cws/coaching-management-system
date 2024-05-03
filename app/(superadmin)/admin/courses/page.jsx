import CourseModel from '@/models/CourseModel';
import connectDb from '@/utils/connectDb'
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';
import { DataTable } from '../ui/data-table';
import { columns } from './columns';

const page = async () => {
    await connectDb();

    let courses = await CourseModel.find().populate("category");
    courses = JSON.parse(JSON.stringify(courses));

    return (
        <div className='px-10 py-5'>
            <div className='flex'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Courses</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='flex justify-between w-full items-center my-5'>
                <h1 className='text-2xl font-medium text-slate-800'>All Courses ({courses.length})</h1>
                <Link href="/admin/courses/insert" className="text-white bg-green-600 px-3 py-2 rounded">Add Course</Link>
            </div>

            <div className='w-full'>
                <DataTable columns={columns} data={courses}/>
            </div>
        </div>
    )
}

export default page