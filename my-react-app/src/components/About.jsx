import React from 'react'

const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-20 ">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-purple-600 inline-block pb-1">
                About Me
            </h2>
            <div className="bg-indigo-900/10 p-6 rounded-lg shadow-lg">
                Hi, I'm Raunak Tomar, a passionate full-stack developer who enjoys building modern, fast, and user-friendly web applications. I began my journey in development during high school, driven by a curiosity to understand how things work on the web.

                I'm especially interested in creating scalable systems and beautiful user interfaces. Outside of coding, you’ll find me exploring tech blogs, sketching app ideas, or hiking through nature trails. I’m currently looking for opportunities to work on impactful projects and learn from experienced teams. 
            </div>


            <h2 className="text-3xl pt-5 font-bold mb-8 border-b-2 border-purple-600 inline-block pb-1">
                Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                {/* College Block */}
                <div className="bg-indigo-900/10 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">College</h3>
                    <p className="text-lg font-medium">ABES Engineering College</p>
                    <p className="text-gray-300">CGPA: 7.79 / 10</p>
                    <p className="text-gray-400 text-sm">2022 – 2026</p>
                </div>

                {/* Schooling Block */}
                <div className="bg-indigo-900/10 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">Schooling</h3>
                    <p className="text-lg font-medium">Vidya Bharati School</p>
                    <p className="text-gray-300">Class 12th: 92%</p>
                    <p className="text-gray-400 text-sm">2021 – 2022</p>
                </div>
            </div>
        </section>
    )
}

export default About 
