import React from "react";
import VBS from "../../assets/VBS.png";
import ABES from "../../assets/ABES.avif";

const Educations = () => {
  return (
    <section className="min-h-screen w-full  px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-center text-5xl font-extrabold mb-6">
          <span className="text-white">My </span>
          <span className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        {/* School Card */}
        <div
          className="
          group
          mb-8
          rounded-3xl
          border
          border-purple-400/20
          bg-white/5
          backdrop-blur-md
          pl-8
          p-2
          transition-all
          duration-300
          hover:border-purple-400/50
          hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
        "
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={VBS}
                alt="Vidya Bharti School"
                className="
                  w-32
                  h-32
                  rounded-2xl
                  object-cover
                  bg-white
                  p-2
                  shadow-lg
                "
              />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-white">
                Vidya Bharti School
              </h3>

              <div className="h-[2px] w-24 mt-3 bg-gradient-to-r from-purple-400 to-transparent"></div>

              <p className="text-purple-200 text-lg mt-3">
                Ghaziabad, Uttar Pradesh
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-white font-semibold">
                    Class 10
                  </span>

                  <span className="text-slate-300">
                    2019 - 2020
                  </span>

                  <span
                    className="
                    px-4 py-1
                    rounded-full
                    bg-purple-500/20
                    border border-purple-400/30
                    text-purple-200
                    text-sm
                    font-semibold
                  "
                  >
                    86.66%
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-white font-semibold">
                    Class 12
                  </span>

                  <span className="text-slate-300">
                    2021 - 2022
                  </span>

                  <span
                    className="
                    px-4 py-1
                    rounded-full
                    bg-purple-500/20
                    border border-purple-400/30
                    text-purple-200
                    text-sm
                    font-semibold
                  "
                  >
                    88.66%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* College Card */}
        <div
          className="
          group
          rounded-3xl
          border
          border-purple-400/20
          bg-white/5
          backdrop-blur-md
          pl-8
          p-2
          transition-all
          duration-300
          hover:border-purple-400/50
          hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
        "
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={ABES}
                alt="ABES Engineering College"
                className="
                  w-32
                  h-32
                  rounded-2xl
                  object-cover
                  bg-white
                  p-2
                  shadow-lg
                "
              />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-white">
                ABES Engineering College
              </h3>

              <div className="h-[2px] w-24 mt-3 bg-gradient-to-r from-purple-400 to-transparent"></div>

              <p className="text-purple-200 text-lg mt-3">
                Ghaziabad, Uttar Pradesh
              </p>

              <div className="mt-6 space-y-4">
                <p className="text-slate-200 text-lg">
                  B.Tech - Computer Science & Engineering (Data Science)
                </p>

                <div className="flex flex-wrap gap-4">
                  <span
                    className="
                    px-4 py-1
                    rounded-full
                    bg-purple-500/20
                    border border-purple-400/30
                    text-purple-200
                    font-semibold
                  "
                  >
                    2022 - 2026
                  </span>

                  <span
                    className="
                    px-4 py-1
                    rounded-full
                    bg-violet-500/20
                    border border-violet-400/30
                    text-violet-200
                    font-semibold
                  "
                  >
                    CGPA 7.94
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Educations;