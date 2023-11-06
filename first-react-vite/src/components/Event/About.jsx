import React from "react";
import Header from '../Landing/Header';

function About () {
    return (
        <>
           <Header />
            <div className=" mx-auto h-screen ">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className=" p-10 ">
                            <h3 className="text-3xl font-bold text-center">Apa itu Webinar?</h3>
                            <p className="text-2xl ml-10 mt-10">
                            Webinar adalah singkatan dari web seminar atau presentasi yang dilakukan secara online 
                            melalui internet. Webinar adalah akronim dari web dan seminar. Webinar memungkinkan 
                            peserta untuk mengikuti, bertanya, atau berinteraksi dengan pembicara dari lokasi 
                            manapun. Webinar menggunakan situs web atau aplikasi tertentu berbasis internet 
                            untuk menghubungkan antar individu secara real-time.
                            </p>
                        </div>
                        <div className="p-4">
                            <img src="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/08/Webinar-FB.png"/>
                        </div>
                    </div>   
                </div>     
            </div>
        </>
    );
}

export default About;