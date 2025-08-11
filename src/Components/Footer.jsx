import React from 'react';
import { Facebook, Twitter, Instagram,} from 'lucide-react';
import logo from "../assets/images/logo.svg";
import pininterest from "../assets/images/icon-pinterest.svg"
import facebook from "../assets/images/icon-facebook.svg"
import twitter from "../assets/images/icon-twitter.svg"
import instagram from "../assets/images/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className="bg-[hsl(260,8%,14%)] py-12">
      <div className="container mx-auto w-11/12 flex flex-col md:flex-row items-center text-center md:items-start justify-between">
        
        {/* Logo on the left */}
        <div className="mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="w-32 invert"/>
        </div>

       
       {/* Div for social and icons */}
       <div className='flex flex-col md:flex-row items-start md:justify-between md:gap-10 lg:gap-20'>
         {/* Middle links section */}
        <div className="flex flex-col  md:flex-row gap-10 lg:gap-12 mb-8  ">
          {/* Features Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Features</h3>
            <div className="flex flex-col opacity-70 gap-2">
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">Link Shortening</a>
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">Branded Links</a>
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">Analytics</a>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <div className="flex flex-col opacity-70 gap-2">
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">Blog</a>
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">Developers</a>
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">Support</a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <div className="flex flex-col opacity-70 gap-2">
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">About</a>
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">Our Team</a>
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">Careers</a>
              <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">Contact</a>
            </div>
          </div>
        </div>

        {/* Social icons on the right */}
        <div className="flex gap-4">
          <a href="#" className="text-white pointer-events-none  hover:md:hover:text-[hsl(180,66%,49%)]">
           <img src={facebook} alt="pininterest logo" width={24} />
          </a>
          <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">
            <img src={twitter} alt="pininterest logo" width={24} />
          </a>
          <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">
            <img src={pininterest} alt="pininterest logo" width={24} />
          </a>
          <a href="#" className="text-white pointer-events-none  md:hover:text-[hsl(180,66%,49%)]">
            <img src={instagram} alt="pininterest logo" width={24} />
          </a>
        </div>
       </div>

        
      </div>
    </footer>
  );
};

export default Footer;