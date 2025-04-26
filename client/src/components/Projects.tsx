import React from 'react'
import pune1 from "../assets/projects/pune/punr-project-2.jpg"
import pune2 from "../assets/projects/pune/pune-project-3.jpg"
import pune3 from "../assets/projects/pune/pune-project-4.jpg"
import pune4 from "../assets/projects/pune/pune-project.jpg"
import ambala from "../assets/projects/ambala/image.png"
import ambikapur from "../assets/projects/ambikapur/image.png"
import katurpula1 from "../assets/projects/katurpula/katurpula1.webp"
import katurpula2 from "../assets/projects/katurpula/katurpula2.webp"
import katurpula3 from "../assets/projects/katurpula/katurpula3.webp"
import katurpula4 from "../assets/projects/katurpula/katurpula4.webp"
import katurpula5 from "../assets/projects/katurpula/katurpula5.webp"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

const Projects: React.FC<{ id?: string }> = ({ id }) => {
  const projectData = [
    {
      title: "First Project at YODDHAA Defence Institue, Pune",
      description: "Successfully executed our first project, delivering expert-led training and strategic insights to aspiring defense candidates.",
      images: [pune1, pune2, pune3, pune4]
    },
    {
      title: "Second Project at SSB Guide Defense Academy Ambala",
      description: "Conducted our second project, fostering skill development and leadership training through immersive, real-world exercises.",
      images: [ambala]
    },
    {
      title: "Third Project at Sainik School, Ambikapur",
      description: "Launched our third project, guiding young cadets with structured mentoring, practical assessments, and holistic personality development.",
      images: [ambikapur]
    },
    {
      title: "Katurpula Project for class 12th",
      description: "A comprehensive training program designed specifically for class 12th students, focusing on academic excellence and career guidance.",
      images: [katurpula1, katurpula2, katurpula3, katurpula4, katurpula5]
    }
  ]

  return (
    <section id={id} className="py-32 bg-[#eaeeed]/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d4b41] mb-4">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-[#718979] mx-auto mb-4"></div>
        </div>

        <div className="space-y-20 max-w-4xl mx-auto">
          {projectData.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                {project.images.length > 1 ? (
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    className="rounded-lg shadow-lg"
                  >
                    {project.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img
                          src={image}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="w-full h-[300px] object-cover rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="text-center md:text-left w-full md:w-1/2 p-6 bg-[#f8f9fa] rounded-lg shadow-md transform transition-transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-[#2d4b41] mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects