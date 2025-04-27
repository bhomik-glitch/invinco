import React from 'react';

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
                controls
                controlsList="nodownload noplaybackrate nofullscreen"
                disablePictureInPicture
                className="absolute top-0 left-0 w-full h-full object-cover [&::-webkit-media-controls-enclosure]:absolute [&::-webkit-media-controls-enclosure]:bottom-0 [&::-webkit-media-controls-enclosure]:left-0 [&::-webkit-media-controls-enclosure]:right-0 [&::-webkit-media-controls-enclosure]:h-12 [&::-webkit-media-controls-enclosure]:bg-transparent [&::-webkit-media-controls-panel]:bg-gradient-to-t [&::-webkit-media-controls-panel]:from-black/40 [&::-webkit-media-controls-panel]:to-transparent [&::-webkit-media-controls-play-button]:opacity-100 [&::-webkit-media-controls-mute-button]:opacity-100 [&::-webkit-media-controls-timeline]:hidden [&::-webkit-media-controls-current-time-display]:hidden [&::-webkit-media-controls-time-remaining-display]:hidden [&::-webkit-media-controls-volume-slider]:hidden [&::-webkit-media-controls-fullscreen-button]:hidden"
                title={`${item.name}'s testimonial`}
                preload="metadata"
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Recomendes; 