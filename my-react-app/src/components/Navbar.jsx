import React from 'react'
import { useState } from 'react'
import Connect from './Connect'
const Navbar = () => {
  const [open, setopen] = useState(false)
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-400">Raunak</h1>
        <div className="space-x-6">
          <a href="https://drive.google.com/file/d/17c34OSxmIKy02E8Mp9b-TNPZnpzMR62B/view?usp=drive_link">Resume</a>
          <a href="#about" className="hover:text-purple-400">About Me</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>

          <button
            onClick={() => setopen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
          >
            Connect
          </button>

        </div>

        {open && (
          <Connect setopen={setopen} />
        )}
      </div>
    </nav>
  )
}

export default Navbar
