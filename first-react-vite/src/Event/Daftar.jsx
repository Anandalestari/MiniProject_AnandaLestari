import { useState } from "react";
import { BiUserCircle } from 'react-icons/bi';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function Daftar() {

  const navigate = useNavigate();
  const navigateTo = (route) => {
    navigate(route);
  };

  const location = useLocation();
  const Judul = location?.state.Judul
  const [formData, setFormData] = useState({
    Namalengkap: '',
    Email: '',
    Nohp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://651d65a444e393af2d59b1a5.mockapi.io/daftar', formData);
      console.log("Data berhasil ditambahkan:", response.data);

      // Setel ulang formulir untuk mengosongkannya
      setFormData({
        Namalengkap: '',
        Email: '',
        Nohp: '',
      });
    } catch (error) {
      console.error('Gagal menambahkan data:', error);
    }
  };

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
      <div className="flex justify-center items-center h-screen ">
        <div className="w-max rounded-md shadow-md p-5">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center">Daftar Webinar</h3>
            <p className="text-2xl text-center">
              Isilah form data di bawah untuk menjadi peserta webinar ${Judul}
            </p>
          </div>
          <form id="Myform" onSubmit={handleSubmit}>
            <div className="mt-8">
              <label htmlFor="Namalengkap" className="text-xl">Nama Lengkap</label>
              <input
                type="text"
                className="mt-1 w-full rounded border p-4 "
                id="Namalengkap"
                name="Namalengkap"
                value={formData.Namalengkap}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap Anda di sini"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="Email" className="text-xl">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded border p-4 "
                id="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Masukkan email anda dengan benar"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="Nohp" className="text-xl">No.HP</label>
              <input
                type="number"
                className="mt-1 w-full rounded border p-4 "
                id="Nohp"
                name="Nohp"
                value={formData.Nohp}
                onChange={handleChange}
                placeholder="Masukkan no.hp anda"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-purple-600 hover-bg-purple-700 text-white text-xl font-bold py-2 px-6 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>    
      
    </>
  );
}

export default Daftar;
