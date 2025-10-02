"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Note {
  id: number;
  name: string;
  message: string;
  role: string;
}

const Notes = () => {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

  const notes: Note[] = [
    {
      id: 1,
      name: "Latisa Cantik",
      message: "Makasih yaa udah mau jadi temen aku di subang dan bandung, walaupun kita se instansi tapi seneng banget kenal deket sm kalian semoga temanannya awet xixixi, makasih udah mau dengerin yapping akuu, sukses yaa sidang nyaa kita usahakan letda ituu",
      role: "Quality Assurance"
    },
    // {
    //   id: 2,
    //   name: "Dhony Irmaniansyah",
    //   message: "Tim yang luar biasa! Setiap hari adalah pembelajaran baru dan pengalaman yang tak terlupakan di Dahana.",
    //   role: "Operasional Produksi"
    // },
    // {
    //   id: 3,
    //   name: "Ikhtafia Harnum Aditya",
    //   message: "Magang di sini memberikan wawasan mendalam tentang pengembangan produk dan energi material yang inovatif.",
    //   role: "Pengembangan Produk & Energic Material"
    // },
    // {
    //   id: 4,
    //   name: "Nabila Desy Rahmawati",
    //   message: "Pengalaman yang membanggakan bisa berkontribusi dalam proyek-proyek penting bersama tim Dahana.",
    //   role: "Pengembangan Produk & Energic Material"
    // }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNoteIndex((prevIndex) => 
        prevIndex === notes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [notes.length]);

  const goToNote = (index: number) => {
    setCurrentNoteIndex(index);
  };

  const goToPrevious = () => {
    setCurrentNoteIndex(currentNoteIndex === 0 ? notes.length - 1 : currentNoteIndex - 1);
  };

  const goToNext = () => {
    setCurrentNoteIndex(currentNoteIndex === notes.length - 1 ? 0 : currentNoteIndex + 1);
  };

  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        className="text-center mb-16"
      >
        <div className="glass-morphism rounded-3xl p-6 inline-block backdrop-blur-xl">
          <h2 className="font-dmserif text-brown-700 text-4xl md:text-5xl text-center">
            Our Messages
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="glass-morphism rounded-3xl p-8 backdrop-blur-xl relative"
      >
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-brown-600 hover:bg-brown-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-brown-600 hover:bg-brown-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Notes Content */}
        <div className="mx-16 min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNoteIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl"
            >
              <div className="mb-6">
                <p className="text-lg md:text-xl text-brown-600 leading-relaxed italic font-medium mb-4">
                  &quot;{notes[currentNoteIndex].message}&quot;
                </p>
              </div>
              
              <div className="border-t border-brown-300 pt-4">
                <h3 className="text-xl md:text-2xl font-bold text-brown-700 mb-2">
                  {notes[currentNoteIndex].name}
                </h3>
                <p className="text-brown-600 font-medium">
                  {notes[currentNoteIndex].role}
                </p>
                <p className="text-green-600 font-semibold mt-1 bg-green-100 rounded-full px-4 py-1 inline-block">
                  Pernah Magang
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {notes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToNote(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentNoteIndex
                  ? "bg-brown-600 scale-110"
                  : "bg-brown-300 hover:bg-brown-400"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Notes;