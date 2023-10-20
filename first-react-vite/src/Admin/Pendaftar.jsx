import { useState, useEffect } from "react";
import { BiArrowBack, BiArrowToLeft, BiFile } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Pendaftar () {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://651d65a444e393af2d59b1a5.mockapi.io/daftar'); 
            setProductList(response.data); 
          } catch (error) {
            console.error('Gagal mengambil data:', error);
          }
        };
    
        fetchData(); 
      }, []);

    return(
        <div className="flex">
            <div className="flex flex-col bg-gray-300 w-80 p-4 h-screen">
                <Link to="/event" className="flex items-center space-x-1 mt-24">
                    <BiArrowBack className="w-12 h-8 text-gray-500"/>
                    <span className="text-gray-500 text-2xl font-semibold">Balik ke Event</span>
                </Link>
                <Link to="/create" className="flex items-center space-x-1 mt-8">
                    <BiFile className="w-12 h-8 text-gray-500"/>
                    <span className="text-gray-500 text-2xl font-semibold">Create New Event</span>
                </Link>
                <Link to="/pendaftar" className="flex items-center space-x-1 mt-8">
                    <FiUsers className="w-12 h-8 text-gray-500"/>
                    <span className="text-gray-500 text-2xl font-semibold">Pendaftar</span>
                </Link>
                <Link to="/create" className="flex items-center space-x-1 mt-8">
                    <BiArrowToLeft className="w-12 h-8 text-gray-500"/>
                    <span className="text-gray-500 text-2xl font-semibold">Log out</span>
                </Link>
            </div>
            <div className="flex-1 p-4 mt-8">
                <h3 className="text-4xl font-bold mb-4">List Webinar</h3>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                        <th className="p-2 text-xl border border-gray-300">NO</th>
                        <th className="p-2 text-xl border border-gray-300">Nama Lengkap</th>
                        <th className="p-2 text-xl border border-gray-300">Email</th>
                        <th className="p-2 text-xl border border-gray-300">No.HP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product, index) => (
                        <tr key={index}>
                            <td className="p-2 text-xl border border-gray-300">{index + 1}</td>
                            <td className="p-2 text-xl border border-gray-300">{product.Namalengkap}</td>
                            <td className="p-2 text-xl border border-gray-300">{product.Email}</td>
                            <td className="p-2 text-xl border border-gray-300">{product.Nohp}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Pendaftar;