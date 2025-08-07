import React from 'react';
import { Facebook, Twitter, Instagram, Factory } from 'lucide-react';
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[hsl(257,27%,26%)] py-12">
      <div className="container mx-auto w-11/12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo on the left */}
        <div className="mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="w-32 invert"/>
        </div>

        {/* Middle links section */}
        <div className="flex flex-col gap-12 mb-8 ">
          {/* Features Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Features</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-white hover:text-gray-300">Link Shortening</a>
              <a href="#" className="text-white hover:text-gray-300">Branded Links</a>
              <a href="#" className="text-white hover:text-gray-300">Analytics</a>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-white hover:text-gray-300">Blog</a>
              <a href="#" className="text-white hover:text-gray-300">Developers</a>
              <a href="#" className="text-white hover:text-gray-300">Support</a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-white hover:text-gray-300">About</a>
              <a href="#" className="text-white hover:text-gray-300">Our Team</a>
              <a href="#" className="text-white hover:text-gray-300">Careers</a>
              <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </div>
          </div>
        </div>

        {/* Social icons on the right */}
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-gray-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <Factory size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;