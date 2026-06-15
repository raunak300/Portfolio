import React from 'react'
import profile from  '../../assets/Profile.png'  // replace with your actual image path
import Navbar from "../UpdateComponents/Navbar"
const Hero = () => {
  return (
    // <div className="md:min-h-screen flex items-center justify-between px-6 md:px-20 pt-3 md:pt-3  flex-col">
    //   <div
    //     className={`
    //       md:mt-4
    //       mt-0
    //       w-full
    //       md:w-4/5
    //       max-w-6xl   
    //       md:h-[10%] 
    //       p-4
    //       md:rounded-xl
    //       lg:rounded-full
    //       bg-gradient-to-r from-indigo-900/30 to-purple-900/30
         
    //     `}
    //   >
    //     <Navbar />
    //   </div>
    //   <div className='flex'>

    //   <div className="flex-1 text-left">
    //     <h3 className=" text-xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-800 to-purple-600 bg-clip-text ">Raunak Tomar</h3>
    //     <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent animate-gradient">
    //     Building Web Solutions with Code & <br /> Creativity
    //     </h2>



    //     {/* <h6 className="text-lg  text-gray-300">Turning ideas into interactive experiences.</h6> */}
    //   </div>

    //   <div className="hidden md:flex flex-1 justify-center">
    //     <img
    //       src={profile}
    //       alt="Raunak Tomar"
    //       className="w-2/4  max-w-sm rounded-full border-4 border-purple-500"
    //       style={{ transform: 'scale(1.04)' }}
    //     />
    //   </div>
    //   </div>
    // </div>
    <div className="min-h-screen flex flex-col items-center">

  {/* Navbar */}
  <div
    className="
      mt-6
      w-full
      md:w-4/5
      max-w-6xl
      p-4
      rounded-full
      bg-gradient-to-r from-indigo-900/30 to-purple-900/30
      backdrop-blur-md
    "
  >
    <Navbar />
  </div>

  {/* Hero Content */}
  <div
    className="
      w-full
      md:w-4/5
      max-w-6xl
      flex
      flex-col-reverse
      md:flex-row
      items-center
      justify-between
      gap-12
      flex-1
      py-12
    "
  >
    {/* Left */}
    <div className="flex-1 text-center md:text-left">

      <p className="text-violet-400 font-semibold mb-3 text-5xl">
        Full Stack Developer
      </p>

      <h1
        className="
          text-5xl
          md:text-7xl
          font-extrabold
          leading-tight
          text-white
        "
      >
        Raunak
        <span className="text-violet-400"> Tomar</span>
      </h1>

      <h2
        className="
          mt-4
          text-xl
          md:text-2xl
          text-slate-300
          max-w-xl
        "
      >
        Building scalable web applications with <p className='text-violet-400'>Code & Creativity</p>
      </h2>
      <div className='mt-4 font-semibold text-violet-400'>
        Delhi, India | 6 months 
      </div>

      

    </div>

    {/* Right */}
    <div className="flex-1 flex justify-center md:hidden lg:flex sm:flex">

     
        <img
          src={profile}
          alt="Raunak Tomar"
          style={{ transform: 'scale(1.04)' }}
          className="
            w-2/4  max-w-sm rounded-full border-4
           
            object-cover
            bg-slate-200
          "
        />

    </div>

  </div>

</div>
  )
}

export default Hero
