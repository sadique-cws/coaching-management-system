import React from 'react'
import ViewCoursePage from '../../ui/ViewCoursePage'
import CourseModel from '@/models/CourseModel';

const page = async ({params}) => {
    let courseId = params.course_id;

    let course = await CourseModel.findById(courseId).populate("category");

  return (
    <div>
        <ViewCoursePage course={course}/>
    </div>
  )
}

export default page