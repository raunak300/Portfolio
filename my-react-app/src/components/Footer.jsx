import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      <p>© 2025 Raunak Tomar. All rights reserved.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="https://github.com/raunak300" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/raunak-tomar-36b590257/" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
