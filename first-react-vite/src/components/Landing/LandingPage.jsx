import React from 'react';
import Header from '../Landing/Header';
import Footer from '../Landing/Footer';

const Landing = () => {

  return (
    <>
      <Header/>
      <div className=" mx-auto mt-10">
        <div className=" items-center space-y-4 md:space-y-0 md:flex-row">
          <div className="grid grid-cols-1">
            <div className=" p-10 ">
              <h3 className="text-4xl font-bold text-cyan-600 text-center mb-4">Welcome to Event Webinar</h3>
              <p className="text-2xl font-bold text-cyan-600 text-center ml-8">
                Yuk ikut webinar agar menambah wawasan terkait banyak hal yang ingin 
                <br/>kamu ketahui, daftarkan dirimu menjadi peserta di webinar yang ingin 
                kamu ikuti.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="p-10 h-64 ml-14">
              <img src="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/08/Webinar-FB.png"/>
            </div>
            <div className="p-10 ">
              <img src="https://www.jogjahost.co.id/blog/wp-content/uploads/2020/12/webinar-scaled.jpg"/>
            </div>
            <div className="p-10 ">
              <img src="https://img.freepik.com/free-vector/modern-flat-webinar-concept_23-2147764463.jpg?size=338&ext=jpg"
               className="w-screen h-64 mr-14"/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
