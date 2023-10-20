import React, { useState } from "react";
import { BiUserCircle } from 'react-icons/bi';
import { Configuration, OpenAIApi } from "openai";
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Faq = () => {
    const faqData = [
        {
          question: "Apa itu webinar?",
          answer: "Webinar adalah singkatan dari (web seminar) Ini adalah presentasi, diskusi, atau lokakarya yang disampaikan melalui internet secara real-time.",
        },
        {
          question: "Apakah webinar gratis?",
          answer: "Ada webinar gratis dan berbayar. Beberapa webinar gratis diselenggarakan untuk tujuan pendidikan atau promosi. Namun, ada juga webinar berbayar yang menawarkan konten khusus atau materi pelatihan yang lebih mendalam.",
        },
        {
          question: "Apakah saya boleh mendaftar lebih dari 1 untuk mengikuti webinar?",
          answer: "Boleh, karena tidak ada batas maksimal untuk mengikuti sebuah webinar.",
        },
        {
          question: "Apakah saya perlu membuat akun untuk mengakses informasi webinar?",
          answer: "Tidak, untuk menjelajahi dan mendaftar menjadi peserta webinar kalian bisa langsung kunjungi halaman event saja.",
        },
        {
          question: "Bagaimana cara mendaftar untuk mengikuti webinar melalui website ini?",
          answer: "Kunjungi halaman event, pada halaman event akan menampilkan semua list webinar dalam bentuk card dan dalam card tersebut ada tombol Daftar, klik tombol tersebut maka akan menapilkan halaman pendaftaran",
        },
      ];
    
    const [selected, setSelected] = useState(null);

    const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
    
      const [prompt, setPrompt] = useState("");
      const [result, setResult] = useState("");
      const [loading, setLoading] = useState(false);
    
      const handleClick = async () => {
        setLoading(true);
        try {
          const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 500,
          });
          setResult(response.data.choices[0].text);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
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
        <div className="items-center justify-center h-screen w-screen">
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-3xl font-semibold text-center mt-24 mb-14">Frequently asked questions</h1>
                {faqData.map((faq, index) => (
                <div
                    key={index}
                    className="mb-4 border rounded p-3 cursor-pointer hover:bg-gray-200"
                    onClick={() => setSelected(index === selected ? null : index)}
                >
                    <h2 className="text-lg font-semibold">{faq.question}</h2>
                    {index === selected && <p className="text-gray-600 mt-2">{faq.answer}</p>}
                </div>
                ))}
            </div>
            <div className="max-w-3xl mx-auto p-4">
                <h2 className="text-2xl font-bold mb-8">Tanyakan pada ChatBot ini jika masih ada kebingungan</h2>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Tulis pertanyaanmu.."
                        className="border p-2 w-80 rounded-full text-xl"
                    ></input>

                    <button
                        onClick={handleClick}
                        disabled={loading || prompt.length === 0}
                        className="bg-cyan-600 hover:bg-blue-600 text-white font-bold rounded-full py-2 m-2"
                    >
                        {loading ? "Loading..." : "Submit"}
                    </button>
                </div>
                <div className="p-4 ml-2">
                    <textarea
                        value={result}
                        className="border p-4 w-96 h-80 resize-none rounded-md text-xl" 
                    >{result}</textarea>          
                </div>
            </div>
        </div>

    </>
    
  );
};

export default Faq;
