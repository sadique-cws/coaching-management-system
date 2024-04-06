import React from 'react';

const AboutVision = () => {
    return (
        <div className="bg-gray-100 py-20 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">About Us</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non finibus nisi, eget accumsan eros. Sed vehicula risus nec risus bibendum, ut vehicula ipsum tincidunt.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/about.jpg" alt="About Us" className="rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non finibus nisi, eget accumsan eros. Sed vehicula risus nec risus bibendum, ut vehicula ipsum tincidunt.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/vision.jpg" alt="Our Vision" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutVision;
