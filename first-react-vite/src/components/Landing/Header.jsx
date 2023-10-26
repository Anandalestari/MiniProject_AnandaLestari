import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
    const navigate = useNavigate();
    const navigateTo = (route) => {
        navigate(route);
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const handleLoginClick = () => {
        navigate("/admin/login");
    };
    return (
        <>
            <div className=" bg-white min-w-screen ">
                <nav className="bg-cyan-600 w-screen rounded-md p-4">
                    <div className="flex flex-1 items-center justify-center ">
                        <ul className="flex flex-1 lg:flex mt-2">
                            <li><p className="text-2xl text-white font-bold ml-4 mt-2">Event Webinar</p></li>
                            <li><button onClick={() => navigateTo("/home")} className="bg-cyan-600 text-white font-bold text-xl ml-4">Home</button></li>
                            <li><button onClick={() => navigateTo("/event")} className="bg-cyan-600 text-white font-bold text-xl">Event</button></li>
                            <li><button onClick={() => navigateTo("/faq")} className="bg-cyan-600 text-white font-bold text-xl">FAQ</button></li>
                            <li><button onClick={() => navigateTo("/about")} className="bg-cyan-600 text-white font-bold text-xl">About</button></li>
                        </ul>
                        <div className="flex space-x-4 mr-4 relative">
                            <BiUserCircle
                                className="w-12 h-12 rounded-full text-white cursor-pointer"
                                onClick={toggleDropdown}
                            />
                            {isDropdownOpen && (
                                <div className="absolute right-0 top-16 bg-white shadow-md px-4 py-2 w-48 h-10">
                                    <ul className="flex items-center space-x-2">
                                        <li className="flex items-center space-x-2" onClick={handleLoginClick}>
                                        <AiOutlineUser className="text-xl" />
                                        <span className="text-lg font-semibold">Log in</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;