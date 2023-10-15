import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#68a8ad] py-4 text-gray-300 text-center">
      <div className="flex justify-center items-center">
        <a
          href="https://www.instagram.com/prani_420/="
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4"
        >
          <FaInstagram />
        </a>
       
        <a
          href="https://www.linkedin.com/in/praneeth-donkana-78966a248/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Praneeth-King"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-sm mt-2">
        Connect  with  me  on social media
      </p>
    </footer>
  );
};

export default Footer;
