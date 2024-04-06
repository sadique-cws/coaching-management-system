import React from 'react';

const Hero = () => {
    return (
        <div className="bg-gray-800 text-white py-24 px-6">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to our Coaching Website</h1>
                <p className="text-lg md:text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non finibus nisi, eget accumsan eros.</p>
                <a href="#contact" className="bg-white text-gray-800 py-2 px-4 rounded-full font-bold uppercase text-sm hover:bg-gray-200">Contact Us</a>
            </div>
        </div>
    );
};

export default Hero;
