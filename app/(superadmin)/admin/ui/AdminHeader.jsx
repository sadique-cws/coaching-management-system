import React from 'react';

const AdminHeader = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <nav>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Users</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Courses</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Settings</a>
                </nav>
            </div>
        </header>
    );
};

export default AdminHeader;
