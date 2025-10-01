"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audioPlayer = audioPlayerRef.current;

    if (!firstClick) {
      setFirstClick(true);
    }

    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Splash Screen */}
      <div className={`bg-gradient-to-b from-[#f7f1d9] to-[#bbaa87] w-full h-full fixed top-0 left-0 z-50 flex flex-col items-center justify-center gap-3 transition-all duration-1000 ease-in-out ${firstClick ? "top-[-100%]" : ""}`}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="font-dmserif text-brown-700 text-2xl text-center -mb-3">
          Welcome to
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="uppercase font-dmserif text-brown-700 text-6xl text-center mb-5 text-bold">
          Magang Dahaners
        </motion.div>

        {/* Gambar setelah teks */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
          <Image src="/images/hero1.jpg" alt="KKN Group" width={500} height={150} className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
        </motion.div>

        {/* Tombol masuk */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="bg-brown-100 px-10 py-3 rounded-full hover:bg-brown-300 cursor-pointer mt-6" onClick={togglePlay}>
          Open Our Memory
        </motion.div>
      </div>

      {/* Tombol music floating */}
      <div className="fixed bottom-7 right-7 z-50">
        {firstClick && (
          <div className="bg-brown-700 rounded-full p-3 cursor-pointer" onClick={togglePlay}>
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
                <path className="fill-white" d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
                <path className="fill-white" d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
              </svg>
            )}
          </div>
        )}

        {/* Audio */}
        <audio ref={audioPlayerRef} className="hidden" controls>
          <source src="/music/music.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </>
  );
};

export default MusicPlayer;
