import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col">
            <nav className="bg-transparent py-4 px-4 lg:px-16 xl:py-8 fixed top-0 z-50 w-full">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="flex items-center">
                        <div className="text-3xl text-white font-bold">TM<span className='text-blue-900'>S</span> </div>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300"
                        >
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
                            </svg>
                        </button>
                    </div>
                    <div className={`w-full lg:flex lg:items-center lg:w-auto ${menuOpen ? '' : 'hidden'}`}>
                        <div className="text-sm lg:flex-grow lg:text-right">
                            <Link to="/user/login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                                User Login
                            </Link>
                            <Link to="/user/register" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                                User Register
                            </Link>
                            <Link to="/admin/login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                                Admin Login
                            </Link>
                            <Link to="/admin/register" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
                                Admin Register
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-grow flex items-center justify-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl text-white font-bold mb-4">Tender Management System</h1>
                    <h1 className="text-4xl text-white font-italic mb-4">Welcome in <span className='text-gradient-to-r text-blue-300'>TMS</span> </h1>
                    <div className="flex items-center gap-4 sm:gap-8 justify-center">
                        <Link to='/admin/login'>
                            <button className="bg-gradient-to-r from-red-300 to-yellow-100 text-gray-500 font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Login as Admin
                            </button>
                        </Link>
                        <Link to='/user/login'>
                        <button className="bg-gradient-to-r from-red-300 to-yellow-100 text-gray-500 font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Login as User
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
