"use client"
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';
import {z} from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import toast from "react-hot-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";


const formShchema = z.object({
    title: z.string().min(1, {
        message:"title is required"
    })
})


const page =  () => {

    const router = useRouter();
    const form = useForm({
        resolver:zodResolver(formShchema),
        defaultValues:{
            title:""
        }
    })  

    const {isSubmitting, isValid} = form.formState;

    const onSubmit = async (values) => {
        console.log(values);

        try{
            const response = await axios.post("/api/courses", values);
            toast.success("course created");
            router.push(`/admin/courses/${response.data._id}`);
        }
        catch(error){
            toast.error("Error creating course")
        }
    }
    
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
                            <BreadcrumbLink href="/admin/courses">Courses</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Insert Course</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='flex justify-between w-full items-center'>
                <h1 className='text-2xl font-medium text-slate-800'>Insert Course</h1>
                <Link href="/admin/courses" className="text-white bg-green-600 px-3 py-2 rounded">Go Back</Link>
            </div>

            <div className='mx-auto max-w-5xl flex md:items-center md:justify-center  h-full p-6'>
                <div>
                    <h1 className="text-2xl">Name your Course</h1>
                    <p className='text-sm text-slate-600'>what would you like to name your course? don't worry you can change this later</p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                            <FormField
                            control={form.control}
                            name="title"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Course Title</FormLabel>
                                    <FormControl>
                                        <Input disabled={isSubmitting} placeholder="e.g 'Web Designing' etc" {...field}/>
                                    </FormControl>
                                    <FormDescription>
                                        What will you teach in this course 
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                            <Link href="/admin/courses">
                                <Button type="button" variant="ghost">Cancel</Button>
                            </Link>
                            <Button type="submit" disabled={!isValid || isSubmitting}>Create Course</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default page