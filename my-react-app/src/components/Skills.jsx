import React from 'react'

const Skills = () => {
  const icons = [
    { name: 'C++', src: 'https://devicon-website.vercel.app/api/cplusplus/plain.svg?color=%230F039C' },
    { name: 'JavaScript', src: 'https://devicon-website.vercel.app/api/javascript/original.svg' },    
    { name: '.NET Core', src: 'https://devicon-website.vercel.app/api/dotnetcore/plain.svg' },
    { name: 'GitHub', src: 'https://devicon-website.vercel.app/api/github/original-wordmark.svg' },
    { name: 'MongoDB', src: 'https://devicon-website.vercel.app/api/mongodb/original-wordmark.svg' },
     { name: 'Express', src: "https://devicon-website.vercel.app/api/express/original-wordmark.svg" },
     { name: 'React', src: 'https://devicon-website.vercel.app/api/react/original-wordmark.svg' },
    { name: 'Node.js', src: 'https://devicon-website.vercel.app/api/nodejs/plain.svg' },
    
  ]

  return (
    <section id="skills" className="py-20 px-6 md:px-20 text-white">
      <h2 className="text-3xl font-bold mb-12 border-b-2  border-purple-600 inline-block pb-1">My Skills</h2>

      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="bg-indigo-900/10 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 ease-in-out"
          >
            <img src={icon.src} alt={icon.name} className="w-16 h-16 object-contain mb-2" />
            <p className="text-sm mt-1">{icon.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
