import React, { useState, useRef } from "react";
import Vid1 from '../assets/videos/vid1.mp4'
import Vid2 from '../assets/videos/vid2.mp4'

const reelsData = [
  { id: 1, src: Vid1, description: "Reel 1" },
  { id: 2, src: Vid2, description: "Reel 2" },
  { id: 3, src: Vid1, description: "Reel 3" },
  { id: 1, src: Vid1, description: "Reel 1" },
  // Add more reels as needed
];

const VideoReels = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleNext = () => {
    if (currentReelIndex < reelsData.length - 1) {
      setCurrentReelIndex(currentReelIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentReelIndex > 0) {
      setCurrentReelIndex(currentReelIndex - 1);
    }
  };

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative w-full  mt-20 text-white">
      <div className="max-w-[1170px] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6 ">
        {reelsData.map((reel, index) => (
          <div
            key={reel.id}
            className={`relative w-[300px] h-[500px] flex justify-center items-center snap-center border-2 border-solid border-red-500 rounded-xl ${
              index === currentReelIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-[300px] h-[500px] rounded-xl object-cover"
              src={reel.src}
              autoPlay={index === currentReelIndex}
              loop
              muted
              onClick={() => handlePlayPause(index)}
            />
            <div className="absolute bottom-10 px-4 text-center text-white bg-black bg-opacity-50 rounded-md">
              {reel.description}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button
          onClick={handlePrev}
          disabled={currentReelIndex === 0}
          className="p-2 bg-gray-800 rounded-full focus:outline-none disabled:opacity-50"
        >
          Prev
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <button
          onClick={handleNext}
          disabled={currentReelIndex === reelsData.length - 1}
          className="p-2 bg-gray-800 rounded-full focus:outline-none disabled:opacity-50"
        >
          Next
        </button>
      </div>
      </div>
    </div>
  );
};

export default VideoReels;
