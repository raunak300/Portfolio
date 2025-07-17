import React, { useState } from 'react'
import Connect from './Connect'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [open, setopen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-400">Raunak</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="https://drive.google.com/file/d/17c34OSxmIKy02E8Mp9b-TNPZnpzMR62B/view?usp=drive_link" target="_blank" rel="noreferrer">
            Resume
          </a>
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

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-4 pb-4 space-y-4 text-white flex flex-col items-center shadow-md">
          <a href="https://drive.google.com/file/d/17c34OSxmIKy02E8Mp9b-TNPZnpzMR62B/view?usp=drive_link" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href="#about" className="hover:text-purple-400">About Me</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <button
            onClick={() => {
              setopen(true)
              setMenuOpen(false)
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
          >
            Connect
          </button>
        </div>
      )}

      {/* Connect Modal */}
      {open && <Connect setopen={setopen} />}
    </nav>
  )
}

export default Navbar
