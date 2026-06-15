import React, { useContext, useState } from 'react'
import Navbar from '../UpdateComponents/Navbar'
import StateContext from '../Context/StateMgmt'
import CodePerson from "../UpdateComponents/CodePerson"
import { Dark, light, portfoliocolors } from "../Data/ColorSystem"
import Terminal from "../UpdateComponents/Terminal"
import profile from '../../assets/Profile.png'
const HeroSec = () => {
  const { darkMode } = useContext(StateContext);
  const [dark, setDark] = useState(true);


  return (
    <div
      className={`
        min-h-screen
        w-full
        flex
        flex-col
        items-center    
        gap-4
      `}
    >
     
      <div className="flex flex-row w-full max-w-6xl text-white p-6 h-[60%] md:gap-4">
        
        <div className={`md:w-[60%] sm:w-[80%]  lg:w-[50%] p-4 mt-20 md:h-[350px] border-1-black flex sm:mx-auto`}>
          {/* there will be terminal  */}
          <Terminal />
        </div>
        <div className={`lg:w-[45%] pt-0 ml-10 sm:hidden lg:flex  `}>
          {/* will have something in here */}
          <CodePerson/>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 mt-2 mb-8">
  {/* Card Wrapper Container */}
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 rounded-xl">
    
    {/* Metric 1 */}
    <div className="flex flex-col space-y-1 p-2">
      <span className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
        10+
      </span>
      <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
        Projects Built
      </span>
    </div>

    {/* Metric 2 */}
    <div className="flex flex-col space-y-1 p-2 border-l border-zinc-800/40 pl-4 md:pl-6 max-sm:border-none">
      <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        6 Mos
      </span>
      <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
        Experience
      </span>
    </div>

    {/* Metric 3 */}
    <div className="flex flex-col space-y-1 p-2 border-l border-zinc-800/40 pl-4 md:pl-6 max-sm:pl-0">
      <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        3+
      </span>
      <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
        Tech Stacks
      </span>
    </div>

    {/* Metric 4 */}
    <div className="flex flex-col space-y-1 p-2 border-l border-zinc-800/40 pl-4 md:pl-6">
      <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        250+
      </span>
      <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
        DSA Solved
      </span>
    </div>

    {/* Metric 5 */}
    <div className="flex flex-col space-y-1 p-2 border-l border-zinc-800/40 pl-4 md:pl-6 max-sm:col-span-2 max-sm:border-none max-sm:pt-4">
      <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        270+
      </span>
      <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
        GitHub Commits
      </span>
    </div>

  </div>
</div>
    </div>
  )
}

export default HeroSec