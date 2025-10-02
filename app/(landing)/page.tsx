import React from "react";
import Hero from "./_components/hero";
import Members from "./_components/members";
import Gallery from "./_components/gallery";
import Notes from "./_components/notes";
import VideoGallery from "./_components/video_gallery";
import MusicPlayer from "./_components/music_player";

const LandingPage = () => {
  return (
    <div className="min-h-[200vh] pt-20">
      <div className="max-con max-sm:px-5">
        <Hero />
        <Members />
        <Gallery />
        <Notes />
        <VideoGallery />
        <MusicPlayer />
      </div>
    </div>
  );
};

export default LandingPage;
