import React from "react";
import { BiLogoInstagram, BiLogoTelegram, BiLogoWhatsapp } from 'react-icons/bi';

function Footer (){
    return(
        <>
            <footer className="bg-cyan-600 w-full  ">
                <div className="grid grid-cols-1 md:grid-cols-3 mt-56 border-b border-gray-300 py-4 mx-24">
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
}

export default Footer;