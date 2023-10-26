import { useState, useEffect } from "react";
import { BiArrowBack, BiArrowToLeft, BiFile } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
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
    
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    useEffect(() => {
        if (!isLoggedIn) {
        navigate('/admin/login');
        }
    }, [isLoggedIn, navigate]);
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/admin/login'); 
    };
    return(
        <div className="flex">
            <div className="flex flex-col bg-gray-300 w-80 p-4 h-screen">
                <div onClick={() => navigate("/event")} className="flex items-center space-x-1 mt-24 cursor-pointer">
                    <BiArrowBack className="w-12 h-8 text-gray-500" />
                    <span className="text-gray-500 text-2xl font-semibold">Balik ke Event</span>
                </div>
                <div onClick={() => navigate("/admin/create")} className="flex items-center space-x-1 mt-8 cursor-pointer">
                    <BiFile className="w-12 h-8 text-gray-500" />
                    <span className="text-gray-500 text-2xl font-semibold">Create New Event</span>
                </div>
                <div onClick={() => navigate("/admin/pendaftar")} className="flex items-center space-x-1 mt-8 cursor-pointer">
                    <FiUsers className="w-12 h-8 text-gray-500" />
                    <span className="text-gray-500 text-2xl font-semibold">Pendaftar</span>
                </div>
                {isLoggedIn && (
                    <div onClick={() => handleLogout()} className="flex items-center space-x-1 mt-8 cursor-pointer">
                    <BiArrowToLeft className="w-12 h-8 text-gray-500" />
                    <span className="text-gray-500 text-2xl font-semibold">Log out</span>
                    </div>
                )}
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