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
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      let progress = scrollableDistance > 0 ? -sectionTop / scrollableDistance : 0;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getCardProgress = (index) => {
    const start = index * 0.30;
    const fadeDistance = 0.12;
    const value = (scrollProgress - start) / fadeDistance;
    return Math.max(0, Math.min(1, value));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#0b132d] via-[#171944] to-[#32145d] md:min-h-[110vh]"
    >
      <div className="pointer-events-none absolute -left-40 top-[20%] hidden h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[130px] md:block" />
      <div className="pointer-events-none absolute -right-40 top-[45%] hidden h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px] md:block" />

      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-purple-300/60 sm:text-sm">
              My Journey
            </p>

            <h2 className="bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text pt-6 text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:pt-20 md:text-6xl">
              Experience
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm text-gray-400 sm:text-base">
              A timeline of my professional journey and the experiences that shaped my development career.
            </p>
          </div>

          {isDesktop ? (
            <div className="relative mx-auto mt-10 max-w-6xl md:mt-24">
              <div className="relative h-[230px]">
                {experiences.map((experience, index) => {
                  const cardProgress = getCardProgress(index);
                  const positions = ["8%", "50%", "92%"];

                  return (
                    <div
                      key={index}
                      className="absolute top-0 w-[270px] transition-none"
                      style={{
                        left: positions[index],
                        transform: `translateX(-50%) translateY(${60 - cardProgress * 60}px)`,
                        opacity: cardProgress,
                      }}
                    >
                      <div className="relative rounded-[28px] border border-white/10 bg-white/[0.06] px-6 py-5 text-center backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:px-7 sm:py-6">
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-purple-500/[0.05] blur-2xl" />

                        <div className="relative">
                          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-purple-300/70 sm:text-xs">
                            {experience.timeline}
                          </p>

                          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                            {experience.company}
                          </h3>

                          <p className="mt-2 text-sm text-gray-400 sm:text-base">
                            {experience.role}
                          </p>
                        </div>

                        <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-r border-b border-white/10 bg-[#211d48]" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative h-10">
                <div className="absolute left-0 right-0 top-1/2 h-[10px] -translate-y-1/2 rounded-full bg-white" />
                <div
                  className="absolute left-0 top-1/2 h-[10px] -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-300 shadow-[0_0_30px_rgba(190,120,255,0.8)]"
                  style={{ width: `${scrollProgress * 100}%` }}
                />

                <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
                  {experiences.map((experience, index) => {
                    const pointPosition = index / (experiences.length - 1);
                    const active = scrollProgress >= pointPosition;

                    return (
                      <div key={index} className="relative flex flex-col items-center">
                        <div
                          className={`relative z-20 h-9 w-9 rounded-full border-[5px] transition-all duration-300 ${
                            active
                              ? "border-purple-300 bg-[#17183b] shadow-[0_0_30px_rgba(190,120,255,0.9)]"
                              : "border-white bg-[#17183b]"
                          }`}
                        >
                          <div
                            className={`absolute inset-0 m-auto h-2 w-2 rounded-full ${
                              active ? "bg-purple-300" : "bg-white"
                            }`}
                          />
                        </div>

                        <p
                          className={`absolute top-12 text-xs transition-colors duration-300 sm:text-sm ${
                            active ? "text-purple-200" : "text-gray-500"
                          }`}
                        >
                          {experience.year}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-xl space-y-5 px-2 pb-10">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
                >
                  <div className="absolute left-5 top-1/2 h-[calc(100%+1.25rem)] w-px -translate-y-1/2 bg-gradient-to-b from-purple-400 to-transparent" />
                  <div className="relative flex items-start gap-3 pl-5">
                    <div className="mt-1 h-3.5 w-3.5 rounded-full bg-purple-300 shadow-[0_0_20px_rgba(190,120,255,0.9)]" />
                    <div className="w-full">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300/70">
                        {experience.timeline}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-white">{experience.company}</h3>
                      <p className="mt-1 text-sm text-gray-300">{experience.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 flex flex-col items-center gap-3 pb-8 md:mt-28">
            <span className="text-[10px] uppercase tracking-[0.35em] text-gray-500 sm:text-xs">
              Scroll to explore
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-purple-400 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
