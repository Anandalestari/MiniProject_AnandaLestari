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
            <header className=" bg-cyan-600 text-white py-3 ">
                <div className="container flex flex-col justify-between items-center md:flex-row ">
                    <a href="#" className="text-2xl text-white font-bold">Event Webinar</a>
                    <nav className="flex item-center gap-5 ">
                        <ul className="flex gap-5">
                            <li><button onClick={() => navigateTo("/")} className="bg-cyan-600 text-white font-bold text-xl ">Home</button></li>
                            <li><button onClick={() => navigateTo("/event")} className="bg-cyan-600 text-white font-bold text-xl">Event</button></li>
                            <li><button onClick={() => navigateTo("/faq")} className="bg-cyan-600 text-white font-bold text-xl">FAQ</button></li>
                            <li><button onClick={() => navigateTo("/about")} className="bg-cyan-600 text-white font-bold text-xl">About</button></li>
                        </ul>
                        <div className="flex items-center">
                            <BiUserCircle
                                className="w-10 h-10 rounded-full text-white cursor-pointer"
                                onClick={toggleDropdown}
                            />
                            {isDropdownOpen && (
                                <div className="absolute right-0 top-16 bg-white shadow-md px-4 py-2 w-48 h-10">
                                    <ul className="flex items-center space-x-2">
                                        <li className="flex items-center space-x-2" onClick={handleLoginClick}>
                                            <AiOutlineUser className="text-xl text-black" />
                                            <span className="text-lg text-black font-semibold">Log in</span>
                                        </li>
                                    </ul>
                              </div>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;