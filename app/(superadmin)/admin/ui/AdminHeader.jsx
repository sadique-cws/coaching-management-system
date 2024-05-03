"use client"

import { signOut } from "next-auth/react";



const AdminHeader = () => {

    const handleLogout = async() => {
        await signOut();
    }
    return (
        <header className=" py-4 px-6 w-full">
            <div className=" mx-auto w-full flex justify-between items-center">
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <nav className="">
                    <a href="#" className="text-gray-800 hover:text-black px-3 py-2">Home</a>
                    <button onClick={handleLogout} className="text-gray-800 hover:text-black px-3 py-2">Logout</button>
                </nav>
            </div>
        </header>
    );
};

export default AdminHeader;
