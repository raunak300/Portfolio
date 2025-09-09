import React from 'react'

const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-20">
          
            {/* About Me Heading */}
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-purple-600 inline-block pb-1">
                About Me
            </h2>

            {/* About Me Content Box */}
            <div className="bg-indigo-900/10 p-8 rounded-xl shadow-xl transition-transform hover:scale-[1.02]">
                <p className="text-lg text-gray-100 leading-relaxed">
                    Hi, I'm <span className="font-semibold text-purple-400">Raunak Tomar</span>, a passionate full-stack developer who enjoys building modern, fast, and user-friendly web applications. I began my journey in development during high school, driven by a curiosity to understand how things work on the web.
                </p>

                <p className="text-lg text-gray-100 leading-relaxed mt-4">
                    I'm especially interested in creating scalable systems and beautiful user interfaces. Outside of coding, you’ll find me exploring tech blogs, sketching app ideas, or hiking through nature trails. I’m currently looking for opportunities to work on impactful projects and learn from experienced teams.
                </p>
            </div>

            {/* Education Section */}
            <h2 className="text-3xl md:pt-10 font-bold mb-8 border-b-2 border-purple-600 inline-block pb-1">
                Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              
                {/* College Card */}
                <div className="bg-indigo-900/10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-4">College</h3>
                    <p className="text-lg font-medium text-gray-100">ABES Engineering College</p>
                    <p className="text-gray-300 mt-2">CGPA: 7.79 / 10</p>
                    <p className="text-gray-400 text-sm mt-1">2022 – 2026</p>
                </div>

                {/* Schooling Card */}
                <div className="bg-indigo-900/10 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-4">Schooling</h3>
                    <p className="text-lg font-medium text-gray-100">Vidya Bharati School</p>
                    <p className="text-gray-300 mt-2">Class 12th: 90.2%</p>
                    <p className="text-gray-400 text-sm mt-1">2021 – 2022</p>
                </div>

            </div>
        </section>
    )
}

export default About
