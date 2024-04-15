import CourseModel from "@/models/CourseModel";
import connectDb from "@/utils/connectDb";
import { redirect } from "next/navigation";
import { writeFile} from "fs/promises";
import {join} from "path";
import CategoryModel from "@/models/CategoryModel";

const AddCourse = ({ categories }) => {

    const handleSubmit = async (formData) => {
        "use server"
        await connectDb();

        let title = formData.get("title");
        let description = formData.get("description");
        let fee = formData.get("fee");
        let duration = formData.get("duration");
        let category = formData.get("category");
        let startDate = formData.get("startDate");
        let endDate = formData.get("endDate");
        let difficulty = formData.get("difficulty");
        let status = formData.get("status");
        let prerequisites = formData.get("prerequisites");        
        
        // image work
        let image = formData.get("image");

        let bytes = await image.arrayBuffer();
        let buffer = Buffer.from(bytes);
        let path = join("./public", "course_images", image.name);
        await writeFile(path, buffer);

        let course = await  new CourseModel({ title, description, fee, duration, category, image:image.name, startDate,endDate, difficulty, status, prerequisites }).save();

        let courseId = course._id;

        let categoryUpdate = await CategoryModel.findByIdAndUpdate(category,{$push:{courses:courseId}});
        redirect("/admin/courses");
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add Course</h1>
            <form action={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    className="w-full border rounded-md px-3 py-2 mb-3"
                />
                <label>instructor:</label>
                <input
                    type="text"
                    name="instructor"
                    className="w-full border rounded-md px-3 py-2 mb-3"
                />
                <label>Description:</label>
                <textarea
                    name="description"
                    className="w-full border rounded-md px-3 py-2 mb-3"
                />
                <label>Fee:</label>
                <input
                    type="number"
                    name="fee"
                    className="w-full border rounded-md px-3 py-2 mb-3"
                />
                <label>prerequisites</label>
                <input
                    type="text"
                    name="prerequisites"
                    className="w-full border rounded-md px-3 py-2 mb-3"
                />
                 <label>Start Date:</label>
                <input
                className="w-full border rounded-md px-3 py-2 mb-3"
                    type="date"
                    name="startDate"
                />

                {/* End Date */}
                <label>End Date:</label>
                <input
                   className="w-full border rounded-md px-3 py-2 mb-3"
                    type="date"
                    name="endDate"
                />
                <label>Duration:</label>
                <input
                    type="number"
                    name="duration"
                    className="w-full border rounded-md px-3 py-2 mb-3"
                />
                <label>Cover Image:</label>
                <input
                    type="file"
                    name="image"
                    className="w-full border rounded-md px-3 py-2 mb-3"
                />
                <label>Category ID:</label>
                <select name="category" className="w-full border rounded-md px-3 py-2 mb-3">
                    <option value="">Select Category</option>
                    {categories.map((cat, index) => <option key={index} value={cat._id}>{cat.name}</option>)}
                </select>
                <label>difficulty</label>
                <select name="difficulty" className="w-full border rounded-md px-3 py-2 mb-3">
                    <option value="">Select difficulty</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                <label>status</label>
                <select name="status" className="w-full border rounded-md px-3 py-2 mb-3">
                    <option value="">Select Status</option>
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                    <option value="Closed">Closed</option>
                </select>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Course
                </button>
            </form>
        </div>
    );
};

export default AddCourse;
