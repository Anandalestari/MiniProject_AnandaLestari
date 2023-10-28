import React, { useEffect} from "react";
import { BiArrowBack, BiArrowToLeft, BiFile } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Navbar = () =>{
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    useEffect(() => {
        if (!isLoggedIn) {
        navigate('/admin/login');
        }
    }, [isLoggedIn, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/admin/login'); 
    };
    return(
        <div className="flex flex-col bg-gray-300 w-80 p-4 h-screen">
            <div onClick={() => navigate("/event")} className="flex items-center space-x-1 mt-24 cursor-pointer">
                <BiArrowBack className="w-12 h-8 text-gray-500" />
                <span className="text-gray-500 text-2xl font-semibold">Balik ke Event</span>
            </div>
            <div onClick={() => navigate("/admin/create")} className="flex items-center space-x-1 mt-8 cursor-pointer">
                <BiFile className="w-12 h-8 text-gray-500" />
                <span className="text-gray-500 text-2xl font-semibold">Create New Event</span>
            </div>
            <div onClick={() => navigate("/admin/pendaftar")} className="flex items-center space-x-1 mt-8 cursor-pointer">
                <FiUsers className="w-12 h-8 text-gray-500" />
                <span className="text-gray-500 text-2xl font-semibold">Pendaftar</span>
            </div>
            {isLoggedIn && (
                <div onClick={() => handleLogout()} className="flex items-center space-x-1 mt-8 cursor-pointer">
                  <BiArrowToLeft className="w-12 h-8 text-gray-500" />
                  <span className="text-gray-500 text-2xl font-semibold">Log out</span>
                </div>
            )}
        </div>
    );
}
export default Navbar;