import Link from "next/link";
const HomeHeader = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="/" className="text-xl font-bold text-gray-800">Coaching Website</Link>
                    </div>
                    <nav className="space-x-4">
                        <a href="#about" className="text-gray-800 hover:text-gray-600">About</a>
                        <a href="#services" className="text-gray-800 hover:text-gray-600">Services</a>
                        <a href="#testimonials" className="text-gray-800 hover:text-gray-600">Testimonials</a>
                        <a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a>
                        <Link href="/register" className="text-gray-800 hover:text-gray-600">Register</Link>
                        <Link href="/login" className="text-gray-800 hover:text-gray-600">Login</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;
