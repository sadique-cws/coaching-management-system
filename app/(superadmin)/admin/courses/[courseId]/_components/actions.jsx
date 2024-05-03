"use client"

import ConfirmModal from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation"
import { useState } from "react";
import toast from "react-hot-toast";


export const Action = ({disabled, courseId, isPublish}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try{
            setIsLoading(true);
            if(isPublish === "Published"){
                await axios.patch(`/api/courses/${courseId}/unpublish`);
                toast.success("course Unpublished");
            }
            else{
                await axios.patch(`/api/courses/${courseId}/publish`);
                toast.success("course Published");
            }

            router.refresh();
        }
        catch(error){
            toast.error("something went wrong")
        }
        finally{
            setIsLoading(false);
        }
    }
    const onDelete = async () => {

        try{
            setIsLoading(true);
            await axios.delete(`/api/courses/${courseId}`);
            toast.success("Course Deleted")
            router.refresh();
            router.push(`/admin/courses`)
        }
        catch(error){
            toast.error("something went wrong");
        }
        finally{
            setIsLoading(false);
        }

    }

    return (
        <div className="flex items-center gap-x-2">
            <Button onClick={onClick} disabled={isLoading || disabled} variant="outline" size="sm">
                {isPublish==="Published" ? "UnPublish" : "Publish"}
            </Button>

            <ConfirmModal onConfirm={onDelete}>
                <Button size="sm" disabled={isLoading}>
                    <Trash className="w-4 h-4"/>
                </Button>
            </ConfirmModal>
        </div>
    )
}