import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from '../Admin/Navbar'

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
            <Navbar />
            <div className="flex-1 p-4 mt-8">
                <h3 className="text-4xl font-bold mb-4">List Pendaftar</h3>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                        <th className="p-2 text-xl border border-gray-300">NO</th>
                        <th className="p-2 text-xl border border-gray-300">Nama Lengkap</th>
                        <th className="p-2 text-xl border border-gray-300">Email</th>
                        <th className="p-2 text-xl border border-gray-300">No.HP</th>
                        <th className="p-2 text-xl border border-gray-300">Webinar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product, index) => (
                        <tr key={index}>
                            <td className="p-2 text-xl border border-gray-300">{index + 1}</td>
                            <td className="p-2 text-xl border border-gray-300">{product.Namalengkap}</td>
                            <td className="p-2 text-xl border border-gray-300">{product.Email}</td>
                            <td className="p-2 text-xl border border-gray-300">{product.Nohp}</td>
                            <td className="p-2 text-xl border border-gray-300">{product.Judul}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Pendaftar;