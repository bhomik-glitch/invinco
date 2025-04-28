import React, { useRef, useState } from 'react';
import { FaExpand } from 'react-icons/fa';

// Import video files
import ATHARV from "../assets/candidates/ATHARV.mp4";
import CAPT from "../assets/candidates/CAPT.mp4";
import SHALLEY from "../assets/candidates/SHALLEY.mp4";
import SHIVANGI from "../assets/candidates/SHIVANGI.mp4";
import SHIVAANSH from "../assets/candidates/SHIVAANSH.mp4";

const linkedInProfiles = [
  {
    name: "ATHARV",
    text: "RECOMMENDED FROM 19 SSB FOR SSC(TECH) ENTRY, NOW IN OTA, CHENNAI",
    video: ATHARV
  },
  {
    name: "CAPT",
    text: "RECOMMENDED FROM NSB KOLKATA FOR SSC GS(X) ENTRY",
    video: CAPT
  },
  {
    name: "SHALLEY YADAV",
    text: "RECOMMENDED FROM NSB KOLKATA FOR SSC GS(X) ENTRY",
    video: SHALLEY
  },
  {
    name: "SHIVANGI",
    text: "RECOMMENDED FROM 34 SSB FOR JAG ENTRY. NOW IN OTA CHENNAI",
    video: SHIVANGI
  },
  {
    name: "SHIVAANSH",
    text: "RECOMMENDED FROM 22 SSB, BHOPAL FOR NDA ENTRY",
    video: SHIVAANSH
  }
];

const Recomendes: React.FC = () => {
  const [currentPlayingVideo, setCurrentPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    if (currentPlayingVideo !== null && currentPlayingVideo !== index) {
      // Pause the previously playing video
      const previousVideo = videoRefs.current[currentPlayingVideo];
      if (previousVideo) {
        previousVideo.pause();
      }
    }
    setCurrentPlayingVideo(index);
  };

  const handleFullscreen = (videoElement: HTMLVideoElement) => {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if ((videoElement as any).webkitRequestFullscreen) {
      (videoElement as any).webkitRequestFullscreen();
    } else if ((videoElement as any).msRequestFullscreen) {
      (videoElement as any).msRequestFullscreen();
    }
  };

  return (
    <>
      {linkedInProfiles.map((item, index) => (
        <div 
          key={`chronicles-${index}`}
          className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#2d4b41] mb-2 text-center">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              {item.text}
            </p>
            {/* Video section */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                controls
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                className="absolute top-0 left-0 w-full h-full object-cover [&::-webkit-media-controls-enclosure]:absolute [&::-webkit-media-controls-enclosure]:bottom-0 [&::-webkit-media-controls-enclosure]:left-0 [&::-webkit-media-controls-enclosure]:right-0 [&::-webkit-media-controls-enclosure]:h-12 [&::-webkit-media-controls-enclosure]:bg-transparent [&::-webkit-media-controls-panel]:bg-gradient-to-t [&::-webkit-media-controls-panel]:from-black/40 [&::-webkit-media-controls-panel]:to-transparent [&::-webkit-media-controls-play-button]:opacity-100 [&::-webkit-media-controls-mute-button]:opacity-100 [&::-webkit-media-controls-timeline]:hidden [&::-webkit-media-controls-current-time-display]:hidden [&::-webkit-media-controls-time-remaining-display]:hidden [&::-webkit-media-controls-volume-slider]:hidden"
                title={`${item.name}'s testimonial`}
                preload="metadata"
                onPlay={() => handlePlay(index)}
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => handleFullscreen(videoRefs.current[index]!)}
                className="absolute bottom-2 left-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-200 z-10"
                title="Toggle fullscreen"
              >
                <FaExpand className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Recomendes; 