import CourseCard from "./CourseCard";

const CourseSection = ({courses}) => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-1">
                <h2 className="text-4xl font-bold pb-4">Courses</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {courses.map((course) => (
                <CourseCard key={course._id} course={course} />
            ))
            }
        </div>
        </div>    
    );
}

export default CourseSection