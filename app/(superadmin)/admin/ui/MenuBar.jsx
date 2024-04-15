import Link from "next/link";
const MenuBar = () => {
    return (
        <header className="bg-gray-900 text-white py-2 px-1">
            <div className="container mx-auto flex justify-between items-center">
                <nav>
                    <Link href="/admin" className="text-gray-300 hover:text-white px-3 py-2">Dashboard</Link>
                    <Link href="/admin/admission" className="text-gray-300 hover:text-white px-3 py-2">Admissions</Link>
                    <Link href="/admin/students" className="text-gray-300 hover:text-white px-3 py-2">Students</Link>
                    <Link href="/admin/categories" className="text-gray-300 hover:text-white px-3 py-2">Categories</Link>
                    <Link href="/admin/courses" className="text-gray-300 hover:text-white px-3 py-2">Courses</Link>
                    <Link href="#" className="text-gray-300 hover:text-white px-3 py-2">Payments</Link>
                </nav>
            </div>
        </header>
    );
};

export default MenuBar;
