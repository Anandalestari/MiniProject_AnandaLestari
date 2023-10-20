import React, {useState} from "react";
import { Link } from "react-router-dom";

const Card = ({ item, onClick }) => {

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="w-96 max-w-md mx-auto my-4 ml-8 justify-center items-center bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <img className="w-full h-48 object-cover" src={item.image} />
          <div className="flex flex-col">
            <p className="text-xl font-semibold mb-2">{item.Judul}</p>
            <p className="font-semibold">{item.Pemateri}</p>
            <p className="font-semibold">{item.Tanggal}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none border-none mx-2"
            onClick={openPopup}
          >
            Read More
          </button>
          <Link to="/daftar">
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none border-none mx-2"
            onClick={onClick}
          >
            Daftar
          </button>
          </Link>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg " style={{ width: '600px', height: '200px' }}>
            <p className="text-xl font-semibold mb-2">{item.Deskripsi}</p>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
