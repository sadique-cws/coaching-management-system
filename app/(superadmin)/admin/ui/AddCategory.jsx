import CategoryModel from "@/models/CategoryModel"
import connectDb from "@/utils/connectDb";
import {redirect} from "next/navigation"
const AddCategory = () => {
    const handleSubmit = async(formdata) => {
        "use server";
        await connectDb();

        let name = formdata.get("name");
        let description = formdata.get("description");

        let category = new CategoryModel({name, description}).save();

        redirect("/admin/categories");



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
