"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast"
import axios from "axios"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"

const formShchema = z.object({
    description:z.string().min(1, {
        message:"description is required"
    })
})


const DescriptionForm = ({initialData, courseId}) => {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    
    const toggleEditing = () => setIsEditing((current) => !current);

    const form = useForm({
        resolver: zodResolver(formShchema),
        defaultValues: {
            description: initialData.description || ""
        }
    })

    const {isSubmitting, isValid} = form.formState;

    const onSubmit = async(values) => {
        try{
            const response = await axios.patch(`/api/courses/${courseId}`, values)
            toast.success("course updated successfully")
            router.refresh();
            toggleEditing();
        }
        catch(err){
            toast.error("something went wrong" + err.message);
        }
    }
  return (
    <div className="mt-6 bg-slate-100 rounded-md dark:bg-gray-800 p-3">
        <div className="font-medium flex items-center justify-between">
            Course Description 

            <Button onClick={toggleEditing} variant="ghost">
                {isEditing ? (
                    <div>Cancel</div>
                ): (
                    <>
                        <Pencil className="h-4 w-4 mr-2"/> 
                        Edit Description
                    </>
                )}
            </Button>
        </div>
        {!isEditing && (
                <p className={cn("text-sm mt-2 dark:text-gray-300", !initialData?.description && "italic text-gray-500")}>
                    {initialData?.description || "No Description Available"}
                </p>
            )}

        {isEditing && (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-3">
                    <FormField
                        control={form.control}
                        name="description"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea disabled={isSubmitting} className="bg-white" placeholder="write about your course" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>

                        <div className="flex items-center gap-x-2">
                            <Button type="submit" disabled={!isValid || isSubmitting}>Submit</Button>
                        </div>
                </form>
            </Form>
        )}
    </div>
  )
}

export default DescriptionForm