import React from 'react'
import { Outlet } from 'react-router-dom'
import "@/App.css"
import Header from '@/components/header'
import '@fortawesome/fontawesome-free/css/all.min.css';


const AppLayout = () => {
    return (
        <div>
            <div className='grid-background'></div>
            <main className='min-h-screen container'>
                <Header />
                <Outlet />
            </main>
            <div className="bg-gray-900 text-gray-300 py-10 px-5 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section: Logo and Short Description */}
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">
                            <span className='text-white'>Hire</span>
                            <span className='text-yellow-500'>Hub</span>
                        </h2>

                        <p className="mt-2">Your gateway to smarter hiring solutions.</p>
                    </div>

                    {/* Right Section: Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-[#1877F2]">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-[#1DA1F2]">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-[#0A66C2]">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="hover:text-[#E4405F]">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>


                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section: Newsletter Subscription */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-center md:text-left mb-4 md:mb-0">
                        © 2024 <span className='font-bold'>
                            <span className='text-white'>Hire</span>
                            <span className='text-yellow-500'>Hub</span>
                        </span>. All rights reserved.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center">
                        <p className="mb-2 sm:mb-0 sm:mr-4">Subscribe to our newsletter:</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l bg-gray-800 text-gray-300 border border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                            <button className="p-2 rounded-r bg-blue-600 hover:bg-blue-700 text-white">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AppLayout