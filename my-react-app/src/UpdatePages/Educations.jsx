import React from "react";
import VBS from "../../assets/VBS.png";
import ABES from "../../assets/ABES.avif";

const Educations = () => {
  return (
    <section className="w-full px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-extrabold sm:text-5xl">
          <span className="text-white">My </span>
          <span className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="group mb-8 rounded-2xl border border-purple-400/20 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] sm:p-5 md:rounded-3xl md:p-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
            <div className="flex-shrink-0">
              <img
                src={VBS}
                alt="Vidya Bharti School"
                className="h-24 w-24 rounded-2xl bg-white object-cover p-2 shadow-lg sm:h-28 sm:w-28 md:h-32 md:w-32"
              />
            </div>

            <div className="w-full text-center md:text-left">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Vidya Bharti School
              </h3>

              <div className="mt-3 h-[2px] w-20 bg-gradient-to-r from-purple-400 to-transparent md:w-24"></div>

              <p className="mt-3 text-base text-purple-200 sm:text-lg">
                Ghaziabad, Uttar Pradesh
              </p>

              <div className="mt-5 flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
                  <span className="text-sm font-semibold text-white sm:text-base">Class 10</span>
                  <span className="text-sm text-slate-300 sm:text-base">2019 - 2020</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200 sm:text-sm">
                    86.66%
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
                  <span className="text-sm font-semibold text-white sm:text-base">Class 12</span>
                  <span className="text-sm text-slate-300 sm:text-base">2021 - 2022</span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200 sm:text-sm">
                    88.66%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group rounded-2xl border border-purple-400/20 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] sm:p-5 md:rounded-3xl md:p-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
            <div className="flex-shrink-0">
              <img
                src={ABES}
                alt="ABES Engineering College"
                className="h-24 w-24 rounded-2xl bg-white object-cover p-2 shadow-lg sm:h-28 sm:w-28 md:h-32 md:w-32"
              />
            </div>

            <div className="w-full text-center md:text-left">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                ABES Engineering College
              </h3>

              <div className="mt-3 h-[2px] w-20 bg-gradient-to-r from-purple-400 to-transparent md:w-24"></div>

              <p className="mt-3 text-base text-purple-200 sm:text-lg">
                Ghaziabad, Uttar Pradesh
              </p>

              <div className="mt-5 space-y-4">
                <p className="text-base text-slate-200 sm:text-lg">
                  B.Tech - Computer Science & Engineering (Data Science)
                </p>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">
                  <span className="rounded-full border border-purple-400/30 bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200 sm:text-sm">
                    2022 - 2026
                  </span>

                  <span className="rounded-full border border-violet-400/30 bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-200 sm:text-sm">
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