"use client"

import { signOut } from "next-auth/react";



const AdminHeader = () => {

    const handleLogout = async() => {
        await signOut();
    }
    return (
        <header className="bg-gray-800 text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <nav>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                    <button onClick={handleLogout} className="text-gray-300 hover:text-white px-3 py-2">Logout</button>
                </nav>
            </div>
        </header>
    );
};

export default AdminHeader;
