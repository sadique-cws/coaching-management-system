"use client"
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
const HomeHeader = () => {

    const {data: session} = useSession();


    const  handleLogout = async () => {
        await signOut();
    }
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="/" className="text-xl font-bold text-gray-800">Coaching Website</Link>
                    </div>
                    <nav className="space-x-4 flex">
                       {
                        !session && (<> <Link href="/register" className="text-gray-800 hover:text-gray-600">Register</Link>
                        <Link href="/login" className="text-gray-800 hover:text-gray-600">Login</Link>
                        </>)
                       }
                        {
                            session && (<span className="flex gap-2 items-center">
                            <Image src={session.user.image} alt={session.user.name} className="rounded-full" width={30} height={30}/>
                            <a href="#contact" className="text-gray-800 hover:text-gray-600">{session.user.name}</a>
                            <button onClick={handleLogout} className="text-white px-2 py-1 rounded bg-red-400">logout</button>
                            </span>) 
                        }
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;
