import React from 'react';
import profile from '../../assets/Profile.png'; // Make sure this path is correct

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-10 md:pt-3">
      
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-800 to-purple-600 bg-clip-text text-transparent">
          Raunak Tomar
        </h3>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent">
          Building Web Solutions with Code <br className="hidden md:block" /> & Creativity
        </h2>

        <h6 className="text-lg text-gray-300">
          Turning ideas into interactive experiences.
        </h6>
      </div>

      {/* Right Image Section */}
      <div className="flex flex-1 justify-center mt-10 md:mt-0">
        <img
          src={profile}
          alt="Raunak Tomar"
          className="w-40 md:w-64 rounded-full border-4 border-purple-500"
          style={{ transform: 'scale(1.04)' }}
        />
      </div>
    </div>
  );
};

export default Hero;
