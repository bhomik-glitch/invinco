
import { FaLinkedin, FaInstagram, FaYoutube , FaWhatsapp} from 'react-icons/fa'

const StickySocail = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4 p-2 bg-[#2c4d42] backdrop-blur-sm rounded-r-lg">
        <a 
          href="https://www.linkedin.com/in/ankur4b" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-[#718979] transition-colors"
        >
          <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
          <span className="sr-only">LinkedIn profile</span>
        </a>
        <a 
          href="https://www.instagram.com/lt_col_ankur_sabharwal" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-[#718979] transition-colors"
        >
          <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
          <span className="sr-only">Instagram profile</span>
        </a>
        <a 
          href="https://youtube.com/@learntolivetolearn" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-[#718979] transition-colors"
        >
          <FaYoutube className="w-6 h-6 md:w-8 md:h-8" />
          <span className="sr-only">YouTube channel</span>
        </a>
        <a 
          href="https://wa.me/918601407444" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-[#718979] transition-colors"
        >
          <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
          <span className="sr-only">
             WhatsApp
             </span>
        </a>
      </div>
    </div>
  )
}

export default StickySocail