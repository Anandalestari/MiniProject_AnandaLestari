import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import Header from '../Landing/Header';

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
            navigate('/admin/create');
        } else {
            alert('Login gagal. Silakan coba lagi.');
        }
    };


    return (
        <>
            <Header />
            <div className="h-screen flex justify-center items-center ">
                <div className="container">
                    <div className="text-center rounded-md shadow-md p-5 mx-96 w-full md:w-1/2 mx-auto">
                        <h1 className="text-3xl font-semibold text-center mb-14">Login</h1>
                        <form >
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
                            <button onClick={handleLogin} className="bg-blue-500 text-white text-xl font-bold hover:bg-blue-600 rounded-full px-2 py-2">Login</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </>

    );
}

export default Login;