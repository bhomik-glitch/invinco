import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube, FaDownload, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d4b41] text-white fixed bottom-0 w-full z-[111111111111111111]">
      <div className="mx-auto w-full max-w-screen-xl p-2 py-3">
        <div className="flex justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-3">
            <a 
              href="https://www.linkedin.com/in/ankur4b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#718979] transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/lt_col_ankur_sabharwal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#718979] transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com/@learntolivetolearn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#718979] transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-sm hidden md:block text-gray-300">
            © 2025 Invincio Services. All Rights Reserved.
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            {/* Download Brochure Button */}
            <a 
              href="https://drive.google.com/drive/folders/1OjD5tquiaCtNUFyCcoWUR0qJEM0JdU--?usp=drive_link" 
              target='_blank'
              className="flex items-center space-x-1 bg-[#718979] hover:bg-[#5a6d5a] text-white px-2 py-1 rounded text-sm transition-colors"
            >
              <FaDownload className="w-3 h-3" />
              <span>Brochure</span>
            </a>

            {/* Contact Button */}
            <a 
              href="https://forms.gle/43eTPUHfqsr23o3n9" 
              target='_blank'
              className="flex items-center space-x-1 bg-[#718979] hover:bg-[#5a6d5a] text-white px-2 py-1 rounded text-sm transition-colors"
            >
              <FaEnvelope className="w-3 h-3" />
              <span>Contact</span>
            </a>
          </div>
        </div>
        <div className="text-xs block md:hidden  text-gray-300 pt-1 text-center ">
            © 2025 Invincio Services. All Rights Reserved.
          </div>
      </div>
    </footer>
  );
};

export default Footer;