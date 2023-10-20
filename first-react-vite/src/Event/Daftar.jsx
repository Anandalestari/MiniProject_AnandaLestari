import { useState } from "react";
import { BiUserCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import axios from 'axios';

function Daftar() {
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
      <div className="container bg-white w-screen ">
        <nav className="bg-cyan-600 w-screen rounded-md p-4">
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
      <div className="flex justify-center items-center h-screen ">
        <div className="w-max rounded-md shadow-md p-5 ml-96">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center">Daftar Webinar</h3>
            <p className="text-2xl text-center">
              Isilah form data di bawah untuk menjadi peserta webinar
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
              <Link to="/event">
                <button
                  type="button"
                  className="bg-purple-600 hover-bg-purple-700 text-white text-xl font-bold py-2 px-6 rounded-full ml-4"
                >
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>    
      
    </>
  );
}

export default Daftar;
