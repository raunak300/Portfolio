import React from 'react';

const projects = [
  {
    title: 'QRA',
    desc: 'QRA (Quick Reach Analysis) is a full-stack microblogging platform where users can post updates in real time, interact with others, and where admins can analyze platform trends using the Gemini API. The platform is built with React, Node.js, Express.js, MongoDB, and Tailwind CSS, and includes user authentication, admin-only dashboards, and future-ready features like sentiment analysis.',
    videoLink: 'https://drive.google.com/file/d/1B_LYvy3s7FUTMwzqltgfhJsVgKWLA-q-/view?usp=sharing',
    gitLink: 'https://github.com/raunak300/Qra'
  },
  {
    title: 'NewsLater-Automated',
    desc: 'This project is a full-stack Fake News Detection System that integrates multiple services to automate news collection, analysis, and verification. The system uses a Machine Learning model trained on a Kaggle dataset to predict whether a news article is Real or Fake.',
    livePreview: "https://news-letter-automated.vercel.app/",
    gitLink: 'https://github.com/raunak300/NewsLetter-AUTOMATED'
  },
  {
    title: 'Campus Access Portal',
    desc: 'A role-based QR authentication system for secure college campus access. Built with React, .NET Core, and MongoDB, featuring OTP verification, JWT-secured APIs, virtual lab access, and Google Drive assignment submissions. Streamlines campus security and management efficiently.',
    updateLink: 'https://drive.google.com/file/d/13p52UDM0jJs3qPQ7Xh-dClipqHTTnFdH/view?usp=sharing'
  },
  {
    title: 'Chess Game',
    desc: 'A real-time two-player online chess game built using Node.js, Express, Socket.IO, and Chess.js. Handles game logic, sync, and legal move validation.',
    videoLink: 'https://drive.google.com/file/d/11MB5MtRKrI4Z2NF-IAL2kP4nYImfy_aq/view?usp=drive_link',
    gitLink: 'https://github.com/raunak300/Chess-Game'
  },
  {
    title: 'Article Summariser with GEMINI_API',
    desc: "Chrome Extension that summarizes any webpage using Gemini API with bullet-point summaries instantly.",
    videoLink: 'https://drive.google.com/file/d/1KPMVDCyzVcgN3A7pX9iSncFZ8sKKHqOa/view?usp=sharing',
    gitLink: 'https://github.com/raunak300/Summariser-Extension'
  },
  {
    title: 'Digital Recognition',
    desc: "Worked on Frontend of Handwritten digit recognition using CNNs with TensorFlow/Keras, interactive web demo powered by Gemini API, in a team of 3",
    livePreview: 'https://handwritten-digit-recognition-cnn.vercel.app/',
    gitLink: 'https://github.com/Priyakumar-15/handwritten-digit-recognition-cnn'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 text-white">
      
      <h2 className="text-3xl font-bold mb-12 border-b-2 border-purple-600 inline-block pb-1">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-indigo-900/10 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">{proj.title}</h3>
            <p className="text-gray-300 text-base mb-5 flex-grow">{proj.desc}</p>

            <div className="flex flex-wrap gap-3">
              {proj.videoLink && (
                <a href={proj.videoLink} target="_blank" rel="noreferrer">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Watch Video
                  </button>
                </a>
              )}
              {proj.livePreview && (
                <a href={proj.livePreview} target="_blank" rel="noreferrer">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Live Preview
                  </button>
                </a>
              )}
              {proj.updateLink && (
                <a href={proj.updateLink} target="_blank" rel="noreferrer">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    View Update
                  </button>
                </a>
              )}
              {proj.gitLink && (
                <a href={proj.gitLink} target="_blank" rel="noreferrer">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
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
