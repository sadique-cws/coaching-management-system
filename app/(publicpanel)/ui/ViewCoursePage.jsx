
const ViewCoursePage = ({ course }) => {
    return (
        <div className="container mx-auto px-4">
            <div className="py-8">
                <h1 className="text-3xl font-semibold mb-4">{course.title}</h1>
                <img src={`/course_images/${course.image}`} alt={course.title} className="w-full  h-64 object-cover mb-4" />
                <p className="text-lg text-gray-800">{course.description}</p>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Course Details</h2>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Fee:</span>
                        <span className="text-gray-800">₹{course.fee}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Duration:</span>
                        <span className="text-gray-800">{course.duration} Weeks</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Difficulty:</span>
                        <span className="text-gray-800">{course.difficulty}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Category:</span>
                        <span className="text-gray-800">{course.category.name}</span>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ViewCoursePage;
