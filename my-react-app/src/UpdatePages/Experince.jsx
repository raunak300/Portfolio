// import React from 'react'
// import { useState } from 'react'
// const Experince = () => {
//   const [experince, setExperince] = useState([
//     {Company : "GlobalLogic", Role : "Intern" , TimeLine: "Jun 2025 - Aug 2025"},
//     {Company : "Infosys", Role : "Power Intern" , TimeLine: "Jan 2026 - Apr 2026"},
//     {Company : "GlobalLogic", Role : "Intern" , TimeLine: "Jun2026 - Present"}])
//   return (
//     <div>
//         <div className="">
//           {
//             experince.map((val,idx)=>(
//               <div>
//                 {val.Company}
//                 {val.Role}
//                 {val.TimeLine}
//               </div>
//             ))
//           }
//         </div>
//     </div>
//   )
// }

// export default Experince

import React, { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "GlobalLogic",
    role: "Intern",
    timeline: "Jun 2025 - Aug 2025",
    year: "2025",
  },
  {
    company: "Infosys",
    role: "Power Intern",
    timeline: "Jan 2026 - Apr 2026",
    year: "2026",
  },
  {
    company: "Infosys",
    role: "Specialist Programmer",
    timeline: "Jun 2026 - Present",
    year: "Present",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      /*
        How far we have scrolled inside this section.
      */
      const sectionTop = rect.top;

      const scrollableDistance =
        section.offsetHeight - window.innerHeight;

      let progress = -sectionTop / scrollableDistance;

      /*
        Keep progress between 0 and 1
      */
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    Calculate how visible each card should be.
  */
  const getCardProgress = (index) => {
    /*
      Give each card its own section of the scroll.

      Card 1 → 0.00 - 0.30
      Card 2 → 0.30 - 0.60
      Card 3 → 0.60 - 0.90
    */

    const start = index * 0.30;

    const fadeDistance = 0.12;

    const value =
      (scrollProgress - start) / fadeDistance;

    return Math.max(0, Math.min(1, value));
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[130vh]
        overflow-hidden
        bg-gradient-to-br
        from-[#0b132d]
        via-[#171944]
        to-[#32145d]
      "
    >

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[20%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[45%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/10
          blur-[140px]
        "
      />

      {/* STICKY SCREEN */}
      <div
        className="
          sticky
          top-0
          flex
          h-screen
          items-center
        "
      >

        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-8
          "
        >

          {/* ================= HEADER ================= */}

          <div className="text-center">

            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.45em]
                text-purple-300/60
              "
            >
              My Journey
            </p>

            <h2
              className="
                pt-20
                bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent
                text-5xl
                font-bold
                tracking-tight
                md:text-6xl
              "
            >
              Experience
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-gray-400
              "
            >
              A timeline of my professional journey
              and the experiences that shaped my
              development career.
            </p>

          </div>


          {/* ================= TIMELINE ================= */}

          <div
            className="
              relative
              mx-auto
              mt-24
              max-w-6xl
            "
          >

            {/* ================= CARDS ================= */}

            <div
              className="
                relative
                h-[230px]
              "
            >

              {experiences.map((experience, index) => {

                const cardProgress =
                  getCardProgress(index);

                /*
                  Position cards at:

                  8%
                  50%
                  92%

                  instead of 0 / 50 / 100
                  so nothing gets cut off.
                */

                const positions = [
                  "8%",
                  "50%",
                  "92%",
                ];

                return (
                  <div
                    key={index}
                    className="
                      absolute
                      top-0
                      w-[270px]
                      transition-none
                    "
                    style={{
                      left: positions[index],

                      transform: `
                        translateX(-50%)
                        translateY(${60 - cardProgress * 60}px)
                      `,

                      opacity: cardProgress,
                    }}
                  >

                    {/* CARD */}

                    <div
                      className="
                        relative
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.06]
                        px-7
                        py-6
                        text-center
                        backdrop-blur-xl
                        shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                      "
                    >

                      {/* glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-[28px]
                          bg-purple-500/[0.05]
                          blur-2xl
                        "
                      />

                      <div className="relative">

                        <p
                          className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-purple-300/70
                          "
                        >
                          {experience.timeline}
                        </p>

                        <h3
                          className="
                            mt-3
                            text-3xl
                            font-bold
                            text-white
                          "
                        >
                          {experience.company}
                        </h3>

                        <p
                          className="
                            mt-2
                            text-base
                            text-gray-400
                          "
                        >
                          {experience.role}
                        </p>

                      </div>

                      {/* small pointer */}

                      <div
                        className="
                          absolute
                          -bottom-3
                          left-1/2
                          h-6
                          w-6
                          -translate-x-1/2
                          rotate-45
                          border-r
                          border-b
                          border-white/10
                          bg-[#211d48]
                        "
                      />

                    </div>

                  </div>
                );
              })}

            </div>


            {/* ================= BAR ================= */}

            <div
              className="
                relative
                h-10
              "
            >

              {/* WHITE BASE LINE */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-1/2
                  h-[10px]
                  -translate-y-1/2
                  rounded-full
                  bg-white
                "
              />

              {/* COLORED PROGRESS */}

              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  h-[10px]
                  -translate-y-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-purple-400
                  via-violet-400
                  to-fuchsia-300
                  shadow-[0_0_30px_rgba(190,120,255,0.8)]
                "
                style={{
                  width: `${scrollProgress * 100}%`,
                }}
              />


              {/* ================= POINTS ================= */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-1/2
                  flex
                  -translate-y-1/2
                  justify-between
                "
              >

                {experiences.map(
                  (experience, index) => {

                    /*
                      Point becomes active when
                      timeline reaches it.
                    */

                    const pointPosition =
                      index /
                      (experiences.length - 1);

                    const active =
                      scrollProgress >=
                      pointPosition;

                    return (
                      <div
                        key={index}
                        className="
                          relative
                          flex
                          flex-col
                          items-center
                        "
                      >

                        {/* POINT */}

                        <div
                          className={`
                            relative
                            z-20
                            h-9
                            w-9
                            rounded-full
                            border-[5px]
                            transition-all
                            duration-300

                            ${
                              active
                                ? `
                                  border-purple-300
                                  bg-[#17183b]
                                  shadow-[0_0_30px_rgba(190,120,255,0.9)]
                                `
                                : `
                                  border-white
                                  bg-[#17183b]
                                `
                            }
                          `}
                        >

                          <div
                            className={`
                              absolute
                              inset-0
                              m-auto
                              h-2
                              w-2
                              rounded-full

                              ${
                                active
                                  ? "bg-purple-300"
                                  : "bg-white"
                              }
                            `}
                          />

                        </div>


                        {/* YEAR */}

                        <p
                          className={`
                            absolute
                            top-12
                            text-sm
                            transition-colors
                            duration-300

                            ${
                              active
                                ? "text-purple-200"
                                : "text-gray-500"
                            }
                          `}
                        >
                          {experience.year}
                        </p>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </div>


          {/* ================= SCROLL ================= */}

          <div
            className="
              mt-28
              flex
              flex-col
              items-center
              gap-3
            "
          >

            <span
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-gray-500
              "
            >
              Scroll to explore
            </span>

            <div
              className="
                h-8
                w-[1px]
                bg-gradient-to-b
                from-purple-400
                to-transparent
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;
