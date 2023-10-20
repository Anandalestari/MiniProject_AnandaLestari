import React, {useState} from "react";
import { BiUserCircle } from 'react-icons/bi';
import {BrowserRouter as Router, Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const authenticate = (username, password) => {
        const dummyUser = { username: 'AnandaLestari', password: 'nandaa123' };
        const user = JSON.parse(localStorage.getItem('user'));
    
        if (user && user.username === username && user.password === password) {
        localStorage.setItem('isLoggedIn', true);
        return true;
        } else if (username === dummyUser.username && password === dummyUser.password) {
        localStorage.setItem('user', JSON.stringify(dummyUser));
        localStorage.setItem('isLoggedIn', true);
        return true;
        } else {
        return false;
        }
    };
    

    const handleLogin = () => {
        if (authenticate(username, password)) {
            navigate('/create');
        } else {
            alert('Login gagal. Silakan coba lagi.');
        }
    };

    return (
        <>
            <div className=" bg-white w-screen">
                <nav className="bg-cyan-600 w-full rounded-md p-4">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <ul className="flex flex-1 space-x-4 lg:flex mt-2">
                        <li><Link to="/home" className="text-white font-bold text-2xl ">Home</Link></li>
                        <li><Link to="/event" className="text-white font-bold text-2xl ">Event</Link></li>
                        <li><Link to="/faq" className="text-white font-bold text-2xl ">FAQ</Link></li>
                        <li><Link to="/about" className="text-white font-bold text-2xl ">About</Link></li>
                        </ul>
                        <div className="flex space-x-4 mr-4">
                        <BiUserCircle className="w-12 h-12 rounded-full text-white"/>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="h-screen w-screen flex justify-center items-center ">
                <div className="text-center w-full rounded-md shadow-md p-5 mx-96">
                    <h1 className="text-3xl font-semibold text-center mb-14">Login</h1>
                    <form className="mt-4">
                        <div className="mb-4 ">
                            <label className=" text-gray-700 text-xl font-bold mb-2">Username:</label>
                            <input
                            type="text"
                            placeholder="Username"
                            className="mt-1 w-full rounded border p-2 "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className=" text-gray-700 text-xl font-bold mb-2">Password:</label>
                            <input
                            type="password"
                            placeholder="Password"
                            className="mt-1 w-full rounded border p-2 "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button onClick={handleLogin} className="bg-blue-500 text-white text-xl font-bold hover:bg-blue-600">Login</button>
                    </form>
                </div>
            </div>
        </>

    );
}

export default Login;