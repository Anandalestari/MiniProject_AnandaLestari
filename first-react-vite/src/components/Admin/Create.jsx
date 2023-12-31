import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from '../Admin/Navbar'

function Create () {
  
  const [isSuccessAddPopupOpen, setIsSuccessAddPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [selectedProductToDelete, setSelectedProductToDelete] = useState(null);
  const [isSuccessUpdatePopupOpen, setIsSuccessUpdatePopupOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    Judul: "",
    Deskripsi: "",
    image: "",
    Pemateri: "",
    Tanggal: "",
  });

  const [productList, setProductList] = useState([]);
  const [formErrors, setFormErrors] = useState({
    Judul: false,
    Deskripsi: false,
    image: false,
    Pemateri: false,
    Tanggal: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      try {
        const response = await axios.put(
          `https://651d65a444e393af2d59b1a5.mockapi.io/webinar/${selectedProduct.id}`,
          formData
        );
        if (response.status === 200) {
          const updatedProductList = productList.map((product) =>
            product.id === selectedProduct.id ? { ...formData, id: selectedProduct.id } : product
          );
          setProductList(updatedProductList);
          setIsEditing(false);
          setSelectedProduct(null);
          setFormData({
            Judul: "",
            Deskripsi: "",
            image: "",
            Pemateri: "",
            Tanggal: "",
          });
          setIsSuccessUpdatePopupOpen(true);
        } else {
          console.error("Gagal mengupdate data:", response.data);
        }
      } catch (error) {
        console.error("Gagal mengupdate data:", error);
      }
    } else {
      const judulRegex = /^[a-zA-Z\s]+$/;
      const deskripsiRegex = /^[a-zA-Z0-9\s.,!?;:'"()-]*$/;
      const imageRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
      const pemateriRegex = /^[A-Z][a-zA-Z\s.,;]*$/;

      const newFormErrors = {
        Judul: !judulRegex.test(formData.Judul),
        Deskripsi: !deskripsiRegex.test(formData.Deskripsi),
        image: !imageRegex.test(formData.image),
        Pemateri: !pemateriRegex.test(formData.Pemateri),
      };
      setFormErrors(newFormErrors);

      if (
        !newFormErrors.Judul &&
        !newFormErrors.Deskripsi &&
        !newFormErrors.image &&
        !newFormErrors.Pemateri
      ) {
        try {
          const response = await axios.post(
            "https://651d65a444e393af2d59b1a5.mockapi.io/webinar",
            formData
          );
          if (response.status === 201) {
            const addedProduct = response.data;
            setProductList([...productList, addedProduct]);
            setFormData({
              Judul: "",
              Deskripsi: "",
              image: "",
              Pemateri: "",
              Tanggal: "",
            });
            setIsSuccessAddPopupOpen(true);
          } else {
            console.error("Gagal menambahkan data:", response.data);
          }
        } catch (error) {
          console.error("Gagal menambahkan data:", error);
        }
      }
    }
  };
  
  const handleDeleteClick = async (id) => {
    setSelectedProductToDelete(id);
    setIsDeletePopupOpen(true);
  };
  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(`https://651d65a444e393af2d59b1a5.mockapi.io/webinar/${selectedProductToDelete}`);
      if (response.status === 200) {
        const updatedProductList = productList.filter((product) => product.id !== selectedProductToDelete);
        setProductList(updatedProductList);
        setIsDeletePopupOpen(false);
        setIsSuccessPopupOpen(true);
      } else {
        console.error("Gagal menghapus data:", response.data);
      }
    } catch (error) {
      console.error("Gagal menghapus data:", error);
    }
  };
  
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleEditClick = (product) => {
    setIsEditing(true);
    setSelectedProduct(product);
    setFormData({
      ...product,
    });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://651d65a444e393af2d59b1a5.mockapi.io/webinar'); 
        setProductList(response.data); 
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    fetchData(); 
  }, []);

    return (
        <div className="flex">
            <Navbar />
            <div className="container mx-auto p-5" style={{ overflowY: 'auto', height: '100vh' }}>
                <div className="flex-1 p-4 mt-8">
                    <h3 className="text-3xl font-bold">Create New Webinar</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label htmlFor="Judul" className="font-semibold">
                            Judul Webinar
                            </label>
                            <input
                            type="text"
                            id="Judul"
                            name="Judul"
                            className={`mt-1 w-full rounded border p-2 ${
                                formErrors.Judul ? "border-red-500" : ""
                            }`}
                            value={formData.Judul}
                            onChange={handleInputChange}
                            />{formErrors.Judul && (
                            <p className="text-red-500">
                                Judul Webinar hanya boleh berisi huruf dan spasi
                            </p>
                            )}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="Deskripsi" className="font-semibold">
                            Deskripsi
                            </label>
                            <textarea
                            type="text"
                            id="Deskripsi"
                            name="Deskripsi"
                            rows="3"
                            className={`mt-1 w-full rounded border p-2 ${
                                formErrors.Deskripsi ? "border-red-500" : ""
                            }`}
                            value={formData.Deskripsi}
                            onChange={handleInputChange}
                            />{formErrors.Deskripsi && (
                            <p className="text-red-500">
                                Deskripsi hanya boleh berisi huruf, angka, spasi dan tanda baca
                            </p>
                            )}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="Pemateri" className="font-semibold">
                            Pemateri
                            </label>
                            <input
                            type="text"
                            id="Pemateri"
                            name="Pemateri"
                            className={`mt-1 w-full rounded border p-2 ${
                                formErrors.Pemateri ? "border-red-500" : ""
                            }`}
                            value={formData.Pemateri}
                            onChange={handleInputChange}
                            />{formErrors.Pemateri && (
                            <p className="text-red-500">
                                Awali dengan huruf kapital dan tidak berisi angka
                            </p>
                            )}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="Tanggal" className="font-semibold">
                            Tanggal Webinar dilaksanakan
                            </label>
                            <input
                            type="date"
                            id="Tanggal"
                            name="Tanggal"
                            min="2023-01-01" 
                            max="2023-12-31"
                            className={`mt-1 w-full rounded border p-2 ${
                                formErrors.Tanggal ? "border-red-500" : ""
                            }`}
                            value={formData.Tanggal}
                            onChange={handleInputChange}
                            />{formErrors.Tanggal && (
                            <p className="text-red-500">
                                Tolong isi tanggal dengan benar
                            </p>
                            )}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="image" className="font-semibold">
                            Link Image
                            </label>
                            <input
                            type="text"
                            id="image"
                            name="image"
                            className={`mt-1 w-full rounded border p-2 ${
                                formErrors.image ? "border-red-500" : ""
                            }`}
                            value={formData.image}
                            onChange={handleInputChange}
                            />{formErrors.image && (
                            <p className="text-red-500">
                                Tolong isi dengan link image webinar
                            </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 px-4 py-2 mt-4 text-center font-bold text-white hover:bg-blue-700"
                        >{isEditing ? "Update" : "Submit"}
                        </button>
                    </form>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">List Webinar</h3>
                    <table>
                        <thead>
                            <tr>
                            <th className="border p-2">NO</th>
                            <th className="border p-2">Judul</th>
                            <th className="border p-2">Deskripsi</th>
                            <th className="border p-2">Pemateri</th>
                            <th className="border p-2">Tanggal</th>
                            <th className="border p-2">Link Image</th>
                            <th className="border p-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((product, index) => (
                            <tr key={index}>
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">{product.Judul}</td>
                                <td className="border p-2">{product.Deskripsi}</td>
                                <td className="border p-2">{product.Pemateri}</td>
                                <td className="border p-2">{product.Tanggal}</td>
                                <td className="border p-2">{product.image}</td>
                                <td className="space-x-2 border p-2">
                                <button
                                    onClick={() => handleEditClick(product)}
                                    className="m-auto rounded-full bg-green-500 px-4 py-2 mx-2 text-center font-bold text-white hover:bg-green-700"
                                >Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteClick(product.id)}
                                    className="m-auto rounded-full bg-red-500 px-4 py-2 my-2 text-center font-bold text-white hover:bg-red-700"
                                >Delete
                                </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {isSuccessAddPopupOpen && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg text-center" style={{ width: '300px', height: '200px' }}>
                      <p className="mt-8 text-xl">Data berhasil ditambahkan!</p>
                      <button
                        onClick={() => setIsSuccessAddPopupOpen(false)}
                        className="bg-blue-500 px-4 py-2 text-white rounded-full hover-bg-blue-700 mx-2 mt-4"
                      >Tutup
                      </button>
                    </div>
                  </div>
                )}
                {isSuccessUpdatePopupOpen && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg text-center" style={{ width: '300px', height: '200px' }}>
                      <p className="mt-12 text-xl">Data berhasil diperbarui!</p>
                      <button
                        onClick={() => setIsSuccessUpdatePopupOpen(false)}
                        className="bg-blue-500 px-4 py-2 text-white text-xl rounded-full hover:bg-blue-700 mx-2 mt-4"
                      >Tutup
                      </button>
                    </div>
                  </div>
                )}
                {isDeletePopupOpen && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg text-center" style={{ width: '300px', height: '200px' }}>
                      <p className="mt-12 text-xl">Anda yakin ingin menghapus data?</p>
                      <button
                        onClick={handleConfirmDelete}
                        className="bg-blue-500 px-4 py-2 text-white text-xl rounded-full hover:bg-blue-700 mx-2 mt-4"
                      > Ya
                      </button>
                      <button
                        onClick={() => setIsDeletePopupOpen(false)}
                        className="bg-red-500 px-4 py-2 text-white text-xl rounded-full hover:bg-red-700 mx-2 mt-4"
                      >Tidak
                      </button>
                    </div>
                  </div>
                )}
                {isSuccessPopupOpen && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg text-center" style={{ width: '300px', height: '200px' }}>
                      <p className="mt-12 text-xl">Data berhasil dihapus!</p>
                      <button
                        onClick={() => setIsSuccessPopupOpen(false)}
                        className="bg-blue-500 px-4 py-2 text-white text-xl rounded-full hover:bg-blue-700 mx-2 mt-4"
                      >Tutup
                      </button>
                    </div>
                  </div>
                )}
            </div>
        </div>
    );
}
export default Create;