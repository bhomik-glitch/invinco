import imageSrc from "../assets/recomendeds/image.jpg";
import bhomik from "../assets/recomendeds/bhomik.jpg.jpg";

const Recomendes = () => {
  return (
    <section className="py-16 bg-white/90">
      <div className="container mx-auto px-4">
        <img src={imageSrc} alt="recomended" className="w-full max-w-screen-2xl mx-auto block object-contain rounded-xl" />
        <p className="text-xl font-semibold text-gray-700 mt-4 text-right">
        And the family of 300+ recommended candidates grows.
        </p>
        
        {/* Bhomik's card */}
        <div className="mt-8 max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col items-center p-6">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#eaeeed] mb-4">
              <img
                src={bhomik}
                alt="Bhomik Pilkhwal"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold text-[#2d4b41] mb-2">
              Bhomik Pilkhwal
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Ex Invincio student currently at IIT Delhi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recomendes