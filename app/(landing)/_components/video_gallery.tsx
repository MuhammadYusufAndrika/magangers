"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface VideoItem {
  src: string;
  filename: string;
}

interface VideoData {
  videos: VideoItem[];
  total: number;
}

const VideoGallery = () => {
  const [videoData, setVideoData] = useState<VideoData>({
    videos: [],
    total: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Failed to fetch video data");
        }
        const data = await response.json();
        setVideoData({
          videos: data.videos,
          total: data.videos.length,
        });
      } catch (err) {
        // Fallback to static data jika API gagal
        const fallbackVideos = [
          "1a517b7e-bf1a-4a48-8e40-d70299203d55.mp4",
          "8e482303-5607-4d02-8a77-dab340260c5b.mp4",
          "f6cf6991-3192-49d9-a709-cad8aa20af55.mp4",
          "e5375388-e425-4440-9fdf-6aee46f2f83d.mp4",
          "5ffcf72a-6570-466d-b8ac-7b26d5cd6c4d.mp4",
        ].map((file) => ({
          src: `/images/gallery/${file}`,
          filename: file,
        }));

        setVideoData({
          videos: fallbackVideos,
          total: fallbackVideos.length,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  if (loading) {
    return (
      <div className="mt-20">
        <div className="text-center">
          <div className="glass-morphism rounded-3xl p-6 inline-block backdrop-blur-xl">
            <h2 className="font-space font-bold text-brown-700 text-4xl md:text-5xl tracking-tight">Loading Videos...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }} className="text-center mb-16">
        <div className="glass-morphism rounded-3xl p-6 inline-block backdrop-blur-xl">
          <h2 className="font-dmserif text-brown-700 text-4xl md:text-5xl text-center">Video Memories</h2>
        </div>
      </motion.div>

      {/* Video Section */}
      {videoData.videos.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="glass-morphism rounded-3xl p-6 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.videos.map((video: VideoItem, index: number) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative rounded-2xl group">
                <video className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-500" controls preload="metadata">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VideoGallery;
