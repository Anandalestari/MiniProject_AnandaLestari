import { useState } from "react";
import { useLocation} from "react-router-dom";
import Header from '../Landing/Header';
import axios from 'axios';

function Daftar() {

  const [isSuccessAddPopupOpen, setIsSuccessAddPopupOpen] = useState(false);
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
      const dataToSubmit = {
        ...formData, 
        Judul: Judul, 
      };
      const response = await axios.post('https://651d65a444e393af2d59b1a5.mockapi.io/daftar', dataToSubmit);
      console.log("Data berhasil ditambahkan:", response.data);

      setFormData({
        Namalengkap: '',
        Email: '',
        Nohp: '',
      });
      setIsSuccessAddPopupOpen(true);
    } catch (error) {
      console.error('Gagal menambahkan data:', error);
    }
  };

  return (
    <>
      <Header />
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
              >Submit
              </button>
            </div>
          </form>
        </div>
        {isSuccessAddPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg text-center" style={{ width: '300px', height: '200px' }}>
              <p className="mt-8 text-xl font-bold">Terimakasih telah mendaftar webinar ini</p>
              <button
                onClick={() => setIsSuccessAddPopupOpen(false)}
                className="bg-blue-500 px-4 py-2 text-white rounded-full hover-bg-blue-700 mx-2 mt-4"
              > Tutup
              </button>
            </div>
          </div>
        )}
      </div>  
    </>
  );
}
export default Daftar;
