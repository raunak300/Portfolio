import React from 'react'
import profile from  '../../assets/Profile.png'  // replace with your actual image path

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-between px-6 md:px-20 pt-3 md:pt-3 ">
      <div className="flex-1 text-left">
        <h3 className=" text-xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-800 to-purple-600 bg-clip-text ">Raunak Tomar</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent animate-gradient">
        Building Web Solutions with Code & <br /> Creativity
        </h2>



        <h6 className="text-lg  text-gray-300">Turning ideas into interactive experiences.

</h6>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <img
          src={profile}
          alt="Raunak Tomar"
          className="w-2/4  max-w-sm rounded-full border-4 border-purple-500"
          style={{ transform: 'scale(1.04)' }}
        />
      </div>
    </div>
  )
}

export default Hero
