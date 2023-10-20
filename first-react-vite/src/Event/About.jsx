import React from "react";
import { BiUserCircle } from 'react-icons/bi';
import {Link} from "react-router-dom";

function About () {

    return (
        <>
            <div className=" bg-white min-w-screen ">
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
            <div className=" mx-auto h-screen w-full">
                <div className="grid grid-cols-2 mt-24 ">
                    <div className=" p-10 ">
                        <h3 className="text-3xl font-bold text-center">Webinar</h3>
                        <p className="text-2xl ml-10 mt-10">
                        Webinar adalah singkatan dari web seminar atau presentasi yang dilakukan secara online 
                        melalui internet. Webinar adalah akronim dari web dan seminar. Webinar memungkinkan 
                        peserta untuk mengikuti, bertanya, atau berinteraksi dengan pembicara dari lokasi 
                        manapun. Webinar menggunakan situs web atau aplikasi tertentu berbasis internet 
                        untuk menghubungkan individu dengan pemirsa secara real-time.
                        </p>
                    </div>
                    <div className="p-10 ">
                        <img src="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/08/Webinar-FB.png"/>
                    </div>
                </div>        
            </div>
        </>
    );
}

export default About;