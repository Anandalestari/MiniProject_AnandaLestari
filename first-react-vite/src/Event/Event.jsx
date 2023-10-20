import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Event/Card';
import { BiUserCircle } from 'react-icons/bi';
import {Link} from 'react-router-dom';

function Event() {

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
        <div className=" bg-white w-screen ">
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
        <div className="h-screen">
            <h2 className="text-4xl text-black font-bold text-center mt-14 mb-14 ml-14 mr-14 ">List Event</h2>
            <div className="flex flex-wrap ml-10">
            {productList.map((item) => (
                <Card
                key={item.id}
                item={item}
                />
            ))}
            </div>
            
        </div>
    </>
  );
};

export default Event;