import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Connect = ({ setopen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/5  bg-opacity-10">
      <div className="bg-white text-black rounded-xl shadow-xl p-8 w-80 relative">
        {/* Close Button */}
        <button
          onClick={() => setopen(false)}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-red-500"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Connect with Me</h2>

        <div className="flex justify-center gap-6 text-3xl mt-4 text-gray-700">
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=raunaktomar30@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500"
          >
            <MdEmail />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/raunak-tomar-36b590257/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/raunak300"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Connect
