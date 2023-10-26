import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Event/Card';
import Header from '../Landing/Header';
import {useNavigate} from 'react-router-dom';

function Event() {
    const navigate = useNavigate();
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
      <div className="w-screen">
        <Header />
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