"use client";
import { MEMBERS } from "@/constants/member";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Members = () => {
  return (
    <div className="mt-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }} className="text-center mb-10">
        <div className="glass-morphism rounded-3xl p-6 inline-block backdrop-blur-xl">
          <h2 className="font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10 mt-20">Our Team</h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {MEMBERS.map((member, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            key={index}
            className="group cursor-pointer h-full"
          >
            <div className="glass-morphism rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
              <div className="relative overflow-hidden rounded-full aspect-square flex-shrink-0">
                <Image
                  src={member.images || "/images/sample-image.png"}
                  width={671}
                  height={809}
                  alt={`Team Member ${index + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Members;
