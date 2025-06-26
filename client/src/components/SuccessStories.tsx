import React from 'react';

// Import photos
import AtharvPhoto from "../assets/client_photo/Atharv.jpg";
import RudranshPhoto from "../assets/client_photo/Rudransh.jpg";
import AdityaPhoto from "../assets/client_photo/Aditya.jpg";
import SankalpPhoto from "../assets/client_photo/Sankalp.jpg";

// Gallery data
const galleryData = [
  {
    name: "ATHARV",
    text: "Atharv, batch- DSTL 39818, SSB-19 SSB PRAYAGRAJ, Chest No. 7",
    photo: AtharvPhoto
  },
  {
    name: "RUDRANSH",
    text: "Rudransh Kishore, Batch- KNDA 40815, SSB-20 SSB, Chest No.- 02",
    photo: RudranshPhoto
  },
  {
    name: "ADITYA",
    text: " Aditya Gupta, batch- KNDA 40816, SSB - 20 SSB, Chest No.- 09",
    photo: AdityaPhoto
  },
  {
    name: "SANKALP",
    text: "Sankalp Jaiswal , batch- PNDA 72255, SSB-21 SSB, Chest No.- 03",
    photo: SankalpPhoto
  }
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 bg-[#eaeeed]/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2d4b41] mb-8 text-center">
          Our Success Stories
        </h2>
        <div className="w-24 h-1 bg-[#718979] mx-auto mb-12"></div>
        
        {/* Scrolling container */}
        <div className="overflow-hidden">
          <div className="flex animate-[marquee_20s_linear_infinite] hover:pause">
            {/* First set of cards */}
            {galleryData.map((item, index) => (
              <div 
                key={`first-${index}`}
                className="flex-none w-96 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl mx-4"
              >
                <div className="p-6">
                  {/* Photo section */}
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#eaeeed] mb-6">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d4b41] mb-2 text-center">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {galleryData.map((item, index) => (
              <div 
                key={`second-${index}`}
                className="flex-none w-96 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl mx-4"
              >
                <div className="p-6">
                  {/* Photo section */}
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#eaeeed] mb-6">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d4b41] mb-2 text-center">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 