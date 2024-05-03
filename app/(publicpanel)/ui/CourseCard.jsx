import Link from "next/link";
const CourseCard = ({ course }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-32 object-cover" src={`/course_images/${course.image}`} alt={course.title} />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">{course.description}</p>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Fee: ₹{course.fee}</span>
                    <span className="text-gray-600">Duration: {course.duration} Weeks</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Difficulty: {course.difficulty}</span>
                    <span className="text-gray-600">Category: {course.category?.name}</span>
                </div>
                
                <Link href={`/course/${course._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Enroll Now
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
