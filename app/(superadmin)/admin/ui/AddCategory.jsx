"use client"
import { handleSubmitCategory } from "@/app/actions";
import toast from "react-hot-toast";

const AddCategory = () => {
    

    const handleSubmit = async (formData) => {
        await handleSubmitCategory(formData);
        toast.success("category created successfully")
    }
   

    return (
        <form className="max-w-md mx-auto bg-slate-200 p-3" action={handleSubmit}>
        <label className="block mb-2">Name:</label>
        <input className="w-full border rounded-md px-3 py-2 mb-3" type="text" name="name"/>
        <label className="block mb-2">Description:</label>
        <textarea className="w-full border rounded-md px-3 py-2 mb-3" name="description" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Category</button>
    </form>
    
    );
};

export default AddCategory;
