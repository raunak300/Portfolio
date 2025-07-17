import React from 'react';

const projects = [
  {
    title: 'QRA',
    desc: 'Microblogging Webapp with Admin Page to Analyze Trends with Gemini_API',
    videoLink: 'https://drive.google.com/file/d/1B_LYvy3s7FUTMwzqltgfhJsVgKWLA-q-/view?usp=sharing',
    gitLink: 'https://github.com/raunak300/Qra'
  },
  {
    title: 'Chess Game',
    desc: 'A real-time two-player online chess game built using Node.js, Express, Socket.IO, and Chess.js. This project handles game logic, synchronization across players, and legal move validation in real-time.',
    videoLink: 'https://drive.google.com/file/d/11MB5MtRKrI4Z2NF-IAL2kP4nYImfy_aq/view?usp=drive_link',
    gitLink: 'https://github.com/raunak300/Chess-Game'
  },
  {
    title: 'Article Summariser with GEMINI_API',
    desc: "This Chrome Extension summarizes any webpage using Google's Gemini API. It offers detailed and bullet-point summaries instantly.",
    videoLink: 'https://drive.google.com/file/d/1KPMVDCyzVcgN3A7pX9iSncFZ8sKKHqOa/view?usp=sharing',
    gitLink: 'https://github.com/raunak300/Summariser-Extension'
  },
  {
    title: 'Campus Canteen Website',
    desc: '',
    //livePreview: 'abes-cafeteria.vercel.app',
    gitLink: 'https://github.com/Priyakumar-15/ABES-CAFETERIA'
  },
  {
    title: 'Digital Recognition',
    desc: "A Capstone Project on advanced handwritten digit recognition utilizing Convolutional Neural Networks (CNNs) with TensorFlow/Keras. Includes model training, evaluation, and an interactive web-based drawing demo powered by Google Gemini API.",
    livePreview: 'https://handwritten-digit-recognition-cnn.vercel.app/',
    gitLink: 'https://github.com/Priyakumar-15/handwritten-digit-recognition-cnn'
  },
  {
    title: 'Campus Access Portal',
    desc: 'Role-based QR authentication system for college campus access built using React, .NET Core API, and MongoDB',
    updateLink: 'https://drive.google.com/file/d/13p52UDM0jJs3qPQ7Xh-dClipqHTTnFdH/view?usp=sharing',
    //gitLink: 'https://github.com/raunak300/Lab-Automation'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gradient-to-b  ">
      <h2 className="text-3xl font-bold mb-12 border-b-2  border-purple-600 inline-block pb-1">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <div key={i} className="bg-indigo-900/20 rounded-xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">{proj.title}</h3>
              <p className="text-sm mb-4">{proj.desc}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {proj.videoLink && (
                <a href={proj.videoLink} target="_blank" rel="noreferrer">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                    Watch Video
                  </button>
                </a>
              )}
              {proj.livePreview && (
                <a href={proj.livePreview} target="_blank" rel="noreferrer">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                    Live Preview
                  </button>
                </a>
              )}
              {proj.updateLink && (
                <a href={proj.updateLink} target="_blank" rel="noreferrer">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                    View Update
                  </button>
                </a>
              )}
              {proj.gitLink && (
                <a href={proj.gitLink} target="_blank" rel="noreferrer">
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md">
                    GitHub
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
