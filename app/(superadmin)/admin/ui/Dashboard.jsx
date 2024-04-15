import CourseModel from '@/models/CourseModel';
import UserModel from '@/models/UserModel';
import React from 'react';

const Dashboard = async () => {
    // Sample data (replace with actual data)
    const totalStudents = await UserModel.countDocuments({status:true});
    const totalAdmissions = await UserModel.countDocuments({status:false});
    const totalCourses = await CourseModel.countDocuments();
    const totalPayments = 500;

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Total Students</h2>
                    <p className="text-3xl font-bold">{totalStudents}</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Total Admissions</h2>
                    <p className="text-3xl font-bold">{totalAdmissions}</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Total Courses</h2>
                    <p className="text-3xl font-bold">{totalCourses}</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Total Payments</h2>
                    <p className="text-3xl font-bold">{totalPayments}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
