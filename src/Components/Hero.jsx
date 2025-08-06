import React from 'react';
import Illustration from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="container mx-auto w-11/12 py-10 md:py-16">
      {/* Flex container - column on mobile, row on desktop */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        {/* Text content - comes first in DOM but appears second on mobile */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              More than just shorter links
            </h1>
            <p className="text-gray-500 text-lg md:text-xl">
              Build your brand's recognition and get detailed insight on how your links are performing.
            </p>
          </div>
          <div>
            <button className="bg-[hsl(180,66%,49%)] hover:opacity-70 text-white font-bold py-3 px-8 rounded-full transition-opacity">
              Get Started
            </button>
          </div>
        </div>

        {/* Image - comes second in DOM but appears first on mobile */}
        <div className="md:w-1/2">
          <img 
            src={Illustration} 
            alt="Person working on computer" 
            className="w-full max-w-xl md:max-w-none ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;