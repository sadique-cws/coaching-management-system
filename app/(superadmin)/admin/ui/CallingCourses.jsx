"use client";
import Image from "next/image";
const CallingCourses = ({courses}) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course, id) => (
                    <tr key={id}>
                        <td className="px-6 py-4 whitespace-nowrap">{course.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{course.duration} Weeks</td>
                        <td className="px-6 py-4 whitespace-nowrap">₹{course.fee}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{course.category.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap"><Image src={`/course_images/${course.image}`} width={100} height={100}/></td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button className="bg-indigo-600 hover:bg-indigo-900 text-white px-2 py-1 rounded">Disabled</button>
                            <button className="ml-2 bg-red-600 hover:bg-red-900 text-white px-2 py-1 rounded">Delete</button>
                        </td>
                    </tr>
                ))} 
            </tbody>
        </table>
    );
};

export default CallingCourses;
