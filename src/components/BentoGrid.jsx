import React from 'react';
import 'tailwindcss/tailwind.css';

const BentoGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-black via-gray-900 to-black text-white">
            {/* Grid Item 1 - Job Listings */}
            <div className="bg-[#1C1C1C] rounded-lg p-6 md:p-8 shadow-lg flex flex-col justify-between transition-transform duration-500 hover:scale-105 h-64 md:h-72 lg:h-80 xl:h-96">
                <div className="bg-[#2A2A2A] h-12 md:h-16 rounded-lg mb-4 flex items-center p-3 md:p-4">
                    <div className="flex flex-grow space-x-2">
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-semibold">Job Listings</h3>
                    <p className="text-gray-400 text-sm md:text-base mb-4">Explore thousands of job opportunities across various industries and locations, tailored to your skills and preferences.</p>
                    <ul className="list-disc list-inside text-gray-500 text-xs md:text-sm">
                        <li>Real-time job alerts</li>
                        <li>Advanced filtering options</li>
                        <li>Save jobs to apply later</li>
                    </ul>
                </div>
            </div>

            {/* Grid Item 2 - 24/7 Support System */}
            <div className="bg-[#1C1C1C] rounded-lg p-6 md:p-8 shadow-lg flex flex-col justify-between transition-transform duration-500 hover:scale-105 h-64 md:h-72 lg:h-80 xl:h-96">
                <div className="bg-[#2A2A2A] h-12 md:h-16 rounded-lg mb-4 flex items-center p-3 md:p-4">
                    <div className="flex flex-grow space-x-2">
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500"></div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-semibold">24/7 Support System</h3>
                    <p className="text-gray-400 text-sm md:text-base mb-4">Get round-the-clock support from our dedicated team to help you with any issues or questions you may have.</p>
                    <ul className="list-disc list-inside text-gray-500 text-xs md:text-sm">
                        <li>Live chat support</li>
                        <li>Email and phone support</li>
                        <li>Comprehensive help center</li>
                    </ul>
                </div>
            </div>

            {/* Grid Item 3 - Interview Scheduler */}
            <div className="bg-[#1C1C1C] rounded-lg p-6 md:p-8 shadow-lg flex flex-col justify-between transition-transform duration-500 hover:scale-105 h-64 md:h-72 lg:h-80 xl:h-96">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 h-12 md:h-16 rounded-lg mb-4"></div>
                <div>
                    <h3 className="text-lg md:text-xl font-semibold">Interview Scheduler</h3>
                    <p className="text-gray-400 text-sm md:text-base mb-4">Never miss an interview with our integrated scheduler that syncs with your calendar and sends reminders.</p>
                    <ul className="list-disc list-inside text-gray-500 text-xs md:text-sm">
                        <li>Automatic time zone conversion</li>
                        <li>Calendar integrations</li>
                        <li>Rescheduling options</li>
                    </ul>
                </div>
            </div>

            {/* Combined Grid Item - Application Tracker & Skill Assessments (Hidden on Mobile) */}
            <div className="hidden md:flex col-span-1 sm:col-span-2 lg:col-span-2 bg-[#1C1C1C] rounded-lg p-6 md:p-8 shadow-lg transition-transform duration-500 hover:scale-105 h-64 md:h-72 lg:h-80 xl:h-96 flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                    <img src="../logo.png" alt="Application Tracker" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                    <div className="bg-[#2A2A2A] rounded-lg px-4 py-2 text-center flex-grow">
                        Stay organized with our Application Tracker, allowing you to monitor the status of your applications and receive updates.
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                    <div className="bg-[#2A2A2A] rounded-lg px-4 py-2 text-center flex-grow">
                        Take skill assessments that align with job roles, helping you stand out in your applications.
                    </div>
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-semibold">Application Tracker & Skill Assessments</h3>
                    <p className="text-gray-400 text-sm md:text-base mb-4">Manage your job hunt efficiently and showcase your skills with assessments tailored to your career goals.</p>
                    <ul className="list-disc list-inside text-gray-500 text-xs md:text-sm">
                        <li>Track application progress</li>
                        <li>Receive real-time status updates</li>
                        <li>Access skill assessments relevant to your industry</li>
                    </ul>
                </div>
            </div>

            {/* Grid Item 5 - Company Insights (Hidden on Mobile) */}
            <div className="hidden md:flex bg-[#1C1C1C] rounded-lg p-6 md:p-8 shadow-lg flex-col justify-between transition-transform duration-500 hover:scale-105 h-64 md:h-72 lg:h-80 xl:h-96">
                <div className="flex items-center space-x-4 mb-4">
                    <img src="../bentoimg1.webp" alt="Company Insights" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                    <div className="bg-[#2A2A2A] rounded-lg px-4 py-2 text-center flex-grow">
                        Access in-depth information on companies, including employee reviews, workplace culture, and more.
                    </div>
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-semibold">Company Insights</h3>
                    <p className="text-gray-400 text-sm md:text-base mb-4">Research companies to ensure they align with your values and career aspirations.</p>
                    <ul className="list-disc list-inside text-gray-500 text-xs md:text-sm">
                        <li>Detailed company profiles</li>
                        <li>Salary insights</li>
                        <li>Employee reviews</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BentoGrid;
