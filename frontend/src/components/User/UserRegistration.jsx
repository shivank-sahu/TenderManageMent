import React, { useState } from 'react';
import { registerUser } from '../../services/api'; // Import registerUser function
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ name, email, password });
            setMessage('User registered successfully!');
            window.alert('User registered successfully!'); // Show alert
            navigate('/user/login'); // Redirect to login page
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLoginRedirect = () => {
        navigate('/user/login');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50"></div>
            <form onSubmit={handleSubmit} className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-lg p-8 sm:p-14">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">User Register</h2>
                {message && (
                    <div className="text-red-500 text-sm mb-4">
                        {message}
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-800 text-sm sm:text-lg font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-800 text-sm sm:text-lg font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6 relative">
                    <label className="block text-gray-800 text-sm sm:text-lg font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline pr-10"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer top-[25px] sm:top-[35px]" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                    <button
                        className="text-gray-800 hover:text-purple-600 font-medium focus:outline-none"
                        onClick={handleLoginRedirect} // Redirect to login page immediately
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserRegister;
