import CourseModel from '@/models/CourseModel';
import UserModel from '@/models/UserModel';
import React from 'react';
import DashboardCard from './DashboardCard';
import connectDb from '@/utils/connectDb';

const Dashboard = async () => {
    // Sample data (replace with actual data)
    await connectDb();
    const totalStudents = await UserModel.countDocuments({status:true});
    const totalAdmissions = await UserModel.countDocuments({status:false});
    const totalCourses = await CourseModel.countDocuments();
    const totalPayments = 500;

    let countData = [
        {
            name: "Total Students",
            value: totalStudents,
        },
        {
            name: "Total Admissions",
            value: totalAdmissions,
        },
        {
            name: "Total Courses",
            value: totalCourses,
        },
        {
            name: "Total Payments",
            value: totalPayments,
        }
    ]

    return (
        <div className='flex md:flex-row flex-col gap-5 flex-1 mt-10'>
            {countData.map((card) => <DashboardCard text={card.name} count={card.value}/>)}
        </div>
    );
};

export default Dashboard;
