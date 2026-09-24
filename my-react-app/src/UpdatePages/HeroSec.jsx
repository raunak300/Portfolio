import React, { useContext } from 'react'
import StateContext from '../Context/StateMgmt'
import CodePerson from "../UpdateComponents/CodePerson"
import Terminal from "../UpdateComponents/Terminal"

const HeroSec = () => {
  const { darkMode } = useContext(StateContext)

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-6 overflow-x-hidden px-3 py-8 sm:px-4 md:px-6 lg:px-8">
      <div className="flex w-full max-w-6xl flex-col items-center gap-5 text-white md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="hidden w-full md:block md:w-[60%] lg:w-[52%] md:mt-20">
          <Terminal />
        </div>

        <div className="flex w-full max-w-[360px] items-center justify-center md:flex lg:w-[45%]">
          <CodePerson />
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-1 sm:px-2">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-3 backdrop-blur-sm sm:gap-4 md:grid-cols-5 md:p-4">
          <div className="flex flex-col space-y-1 p-2">
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-4xl">
              10+
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
              Projects Built
            </span>
          </div>

          <div className="flex flex-col space-y-1 border-l border-zinc-800/40 p-2 pl-4 sm:pl-5 md:pl-6">
            <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              6 Mos
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
              Experience
            </span>
          </div>

          <div className="flex flex-col space-y-1 border-l border-zinc-800/40 p-2 pl-4 sm:pl-5 md:pl-6">
            <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              3+
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
              Tech Stacks
            </span>
          </div>

          <div className="flex flex-col space-y-1 border-l border-zinc-800/40 p-2 pl-4 sm:pl-5 md:pl-6">
            <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              250+
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
              DSA Solved
            </span>
          </div>

          <div className="col-span-2 flex flex-col space-y-1 border-l border-zinc-800/40 p-2 pl-4 sm:col-span-1 sm:pl-5 md:pl-6">
            <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              270+
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs">
              GitHub Commits
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSec