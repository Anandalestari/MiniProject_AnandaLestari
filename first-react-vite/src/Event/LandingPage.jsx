import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLogoInstagram, BiLogoTelegram, BiLogoWhatsapp, BiUserCircle } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

const Landing = () => {
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
        <nav className="bg-cyan-600 w-full rounded-md p-4">
          <div className="flex flex-1 items-center justify-center ">
            <ul className="flex flex-1 lg:flex mt-2">
              <li><button onClick={() => navigateTo("/home")} className="bg-cyan-600 text-white font-bold text-xl">Home</button></li>
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
      <div className=" mx-auto mt-10">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-4xl font-bold text-cyan-600 text-center mb-4">Welcome to Event Webinar</h3>
            <p className="text-2xl font-bold text-cyan-600 ml-8">
              Lorem ipsum is a placeholder text commonly used to demonstrate the 
              <br/>visual form of a document or a typeface without relying on meaningful content.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img 
            src="https://static.vecteezy.com/system/resources/previews/000/665/349/original/group-of-students-watching-webinar-online-vector.jpg" 
            className="w-auto h-auto p-14"
            />
          </div>
        </div>
      </div>
      <footer className="bg-cyan-600 w-full  ">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-64 border-b border-gray-300 py-4 mx-24">
          <div className="p-4">
            <h3 className="text-3xl text-white font-bold ml-60 mt-14">Event Webinar</h3>
          </div>
          <div className="p-4 ml-32 mt-4">
            <h3 className="text-2xl text-white font-bold">Social Media</h3>
            <div className="flex space-x-2 mt-4">
              <a href="https://wa.me/6283829269557" target="_blank" rel="noopener noreferrer">
                <BiLogoWhatsapp alt="Whatsapp" className="w-8 h-8 text-white ml-2" />
              </a>
              <a href="https://t.me/AnandaLestari13" target="_blank" rel="noopener noreferrer">
                <BiLogoTelegram alt="Telegram" className="w-8 h-8 text-white ml-2" />
              </a>
              <a href="https://www.instagram.com/anandalestari91/" target="_blank" rel="noopener noreferrer">
                <BiLogoInstagram alt="Instagram" className="w-8 h-8 text-white ml-2" />
              </a>
            </div>
          </div>
          <div className="p-4 mt-4">
            <h3 className="text-2xl text-white font-bold">Alamat</h3>
            <p className="text-xl text-white">Kp.Mariuk Desa.Neglasari</p>
            <p className="text-xl text-white">Kecamatan Cipongkor</p>
            <p className="text-xl text-white">
              Phone <a href="tel:+6283195513947" className="text-white">+6283195513947</a>
            </p>
          </div>
        </div>
        
      </footer>
      <div className="bg-cyan-600 w-full text-white py-6 text-center">
        <p className="text-2xl font-bold">&copy; {new Date().getFullYear()} Copyright Event Webinar. All Rights Reserved</p>
      </div>

    </>
  );
};

export default Landing;
