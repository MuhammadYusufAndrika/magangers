"use client";
import React, { useState, useEffect } from "react";
//@ts-ignore
import ImageGallery from "react-image-gallery";
import { motion } from "framer-motion";

interface GalleryItem {
  original: string;
  thumbnail: string;
  filename: string;
}

interface VideoItem {
  src: string;
  filename: string;
}

interface GalleryData {
  images: GalleryItem[];
  videos: VideoItem[];
  total: number;
}

const Gallery = () => {
  const [galleryData, setGalleryData] = useState<GalleryData>({
    images: [],
    videos: [],
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Failed to fetch gallery data");
        }
        const data = await response.json();
        setGalleryData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        // Fallback to static data jika API gagal
        const fallbackImages = [
          "IMG_2775.jpg",
          "IMG_6816.JPG",
          "IMG_6817.JPG",
          "IMG_6818.JPG",
          "IMG_6819.JPG",
          "IMG_6836.JPG",
          "IMG_6837.JPG",
          "IMG_6838.JPG",
          "IMG_6844.JPG",
          "IMG_6846.JPG",
          "IMG_6843.JPG",
          "IMG_6850.JPG",
          "IMG_6852.JPG",
          "IMG_6854.JPG",
          "IMG_6856.JPG",
          "IMG_6860.JPG",
          "IMG_6862.JPG",
          "IMG_6866.JPG",
          "IMG_6868.JPG",
          "IMG_6869.JPG",
        ].map((file) => ({
          original: `/images/gallery/${file}`,
          thumbnail: `/images/gallery/${file}`,
          filename: file,
        }));

        const fallbackVideos = ["1a517b7e-bf1a-4a48-8e40-d70299203d55.mp4", "8e482303-5607-4d02-8a77-dab340260c5b.mp4", "f6cf6991-3192-49d9-a709-cad8aa20af55.mp4"].map((file) => ({
          src: `/images/gallery/${file}`,
          filename: file,
        }));

        setGalleryData({
          images: fallbackImages,
          videos: fallbackVideos,
          total: fallbackImages.length + fallbackVideos.length,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) {
    return (
      <div className="mt-20">
        <div className="text-center">
          <div className="glass-morphism rounded-3xl p-6 inline-block backdrop-blur-xl">
            <h2 className="font-space font-bold text-white text-5xl md:text-6xl tracking-tight">Loading Memories...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }} className="text-center mb-16">
        <div className="glass-morphism rounded-3xl p-6 inline-block backdrop-blur-xl">
          <h2 className="font-space font-bold text-brown-700 text-5xl md:text-6xl tracking-tight">Our Memories</h2>
        </div>
      </motion.div>

      {/* Image Gallery Section */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }} className="glass-morphism rounded-3xl p-6 backdrop-blur-xl mb-12">
        <div className="rounded-2xl overflow-hidden">
          <ImageGallery items={galleryData.images} showThumbnails={true} showFullscreenButton={true} showPlayButton={false} autoPlay={false} slideInterval={3000} thumbnailPosition="bottom" />
        </div>
      </motion.div>

      {/* Video Section */}
      {galleryData.videos.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }} className="mt-16">
          <div className="glass-morphism rounded-3xl p-6 backdrop-blur-xl">
            <h3 className="font-space font-bold text-brown-700 text-3xl md:text-4xl text-center mb-8">Video Memories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData.videos.map((video: VideoItem, index: number) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative overflow-hidden rounded-2xl group">
                  <video className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-500" controls preload="metadata">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
