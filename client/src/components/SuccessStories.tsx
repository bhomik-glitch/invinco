import React from 'react';
import bhomik from "../assets/recomendeds/bhomik.jpg.jpg";
import image2 from "../assets/recomendeds/image2.png";

// Gallery data
const galleryData = [
  {
    image: bhomik,
    name: "Bhomik Pilkhwal",
    text: "Ex Invincio student currently at IIT Delhi"
  },
  {
    image: image2,
    name: "Aryan Sharma",
    text: "Selected for Indian Military Academy"
  },
  {
    image: bhomik,
    name: "Priya Patel",
    text: "Commissioned in Indian Air Force"
  },
  {
    image: image2,
    name: "Rahul Kumar",
    text: "Selected for Naval Academy"
  },
  {
    image: bhomik,
    name: "Ananya Singh",
    text: "Joined National Defence Academy"
  },
  {
    image: image2,
    name: "Vikram Malhotra",
    text: "Selected for Officers Training Academy"
  },
  {
    image: bhomik,
    name: "Neha Gupta",
    text: "Commissioned in Indian Army"
  },
  {
    image: image2,
    name: "Rajesh Verma",
    text: "Selected for Technical Entry Scheme"
  },
  {
    image: bhomik,
    name: "Kavita Reddy",
    text: "Joined Air Force Academy"
  },
  {
    image: image2,
    name: "Amit Desai",
    text: "Selected for Combined Defence Services"
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
          <div className="flex animate-marquee hover:pause">
            {/* First set of cards */}
            {galleryData.map((item, index) => (
              <div 
                key={`first-${index}`}
                className="flex-none w-80 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl mx-4"
              >
                <div className="p-6">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#eaeeed] mb-4 mx-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d4b41] mb-2 text-center">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {galleryData.map((item, index) => (
              <div 
                key={`second-${index}`}
                className="flex-none w-80 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl mx-4"
              >
                <div className="p-6">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#eaeeed] mb-4 mx-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d4b41] mb-2 text-center">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
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