import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Event/Card';
import { BiUserCircle } from 'react-icons/bi';
import {useNavigate} from 'react-router-dom';

function Event() {
    const navigate = useNavigate();

    const navigateTo = (route) => {
      navigate(route);
    };
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('https://651d65a444e393af2d59b1a5.mockapi.io/webinar')
          .then((response) => {
            const data = response.data;
            console.log("Data dari API:", data);
      
            const sortedData = data.sort((a, b) => new Date(a.Tanggal) - new Date(b.Tanggal));
            console.log("Data yang diurutkan:", sortedData);
      
            setProductList(sortedData);
          })
          .catch((error) => {
            console.error('Gagal mengambil data:', error);
          });
      }, []);     
   
  return (
    <>
        <div className="bg-white w-screen">
            <nav className="bg-cyan-600 w-full rounded-md p-4">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <ul className="flex flex-1 lg:flex mt-2">
                  <li><button onClick={() => navigateTo("/home")} className="bg-cyan-600 text-white font-bold text-xl">Home</button></li>
                  <li><button onClick={() => navigateTo("/event")} className="bg-cyan-600 text-white font-bold text-xl">Event</button></li>
                  <li><button onClick={() => navigateTo("/faq")} className="bg-cyan-600 text-white font-bold text-xl">FAQ</button></li>
                  <li><button onClick={() => navigateTo("/about")} className="bg-cyan-600 text-white font-bold text-xl">About</button></li>
                </ul>
                <div className="flex space-x-4 mr-4">
                  <BiUserCircle className="w-12 h-12 rounded-full text-white" />
                </div>
              </div>
            </nav>
        </div>
        <div className="h-screen">
            <h2 className="text-4xl text-black font-bold text-center mt-14 mb-14 ml-14 mr-14 ">List Event</h2>
            <div className="flex flex-wrap ml-10">
            {productList.map((item) => (
                <Card
                key={item.id}
                item={item}
                onClick={() => navigate("/daftar", {
                  state: {
                    Judul:item.Judul
                  }
                })}
                />
            ))}
            </div>
            
        </div>
    </>
  );
};

export default Event;