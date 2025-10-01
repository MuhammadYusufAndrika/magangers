"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10 uppercase text-bold">
       Ikatan Magangers Dahana
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
        <Image className="w-full rounded-xl aspect-[21/9] max-sm:aspect-video object-cover" src="/images/herocoverr.jpg" width={2000} height={1000} alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
