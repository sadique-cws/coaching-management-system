"use client"
import { useState } from "react"
import {z} from "zod"
import { Button } from "@/components/ui/button"
import { Pencil,PlusCircle,ImageIcon } from "lucide-react"
import toast from "react-hot-toast"
import axios from "axios"
import Image from "next/image";
import {FileUpload} from "@/components/file-upload"
import { useRouter } from "next/navigation"



export const ImageForm = ({initialData, courseId}) => {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    
    const toggleEditing = () => setIsEditing((current) => !current);

    

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
            Course Image 

            <Button onClick={toggleEditing} variant="ghost">
                {isEditing && (
                    <div>Cancel</div>
                )}

                {!isEditing  && !initialData.image && (
                    <>
                        <PlusCircle class='w-3 h-4 mr-3'/>
                        Add an Image
                    </>
                )}
                {!isEditing  && initialData.image && (
                    <>
                        <Pencil class='w-3 h-4 mr-3'/>
                       Edit Image
                    </>
                )}
            </Button>
        </div>
        {!isEditing && (
               (!initialData.image) ? (
                <div className='flex h-60 items-center justify-center bg-slate-200 rounded-md'>
                    <ImageIcon className='w-10 h-10 text-slate-500'/>
                </div>
               ) : 
                <div className='relative aspect-video mt-2'>
                    <Image alt="upload" fill className="object-cover rounded-md" src={initialData.image}/>
                </div>
               ) 
        }

        {isEditing && (
            <div>
                <FileUpload endpoint="courseImage" onChange={(url) => {
                    if(url){
                        onSubmit({image: url})
                    }
                }}/>
        
            <div className="flex items-center gap-x-2">
                <p>16:9 aspect ratio recommend</p>
            </div>
            </div>
        )}

    </div>
  )
}

