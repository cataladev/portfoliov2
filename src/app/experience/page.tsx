'use client'
import { useState, useEffect } from 'react';

type Experience = {
  title: string;
  description: string;
  date: string;
};

const experiences: Experience[] = [
  { title: 'Avatar Buddy AI Internship', description: 'Started an internship at a local tech company through Miami Dade County Public Schools.', date: '2022' },
  { title: 'Miami EdTech', description: 'Internship at another local tech company.', date: '2023' },
  { title: 'Night of Knights', description: 'Made a game for my senior year capstone in highschool. ', date: '2024' },
  { title: 'Crowning Games', description: 'Worked as a Game Programming Intern, I was in charge of how enemies AI worked.', date: '2024' },
  { title: 'UCF', description: 'Started my degree in Computer Science.', date: '2024' },
  { title: 'ShellHacks', description: 'I attended shellhacks, creating my project HackTracker.', date: '2024' },
  { title: 'KnightHacks', description: 'I attended KnightHacks VIII, creating my project Spark-A-Hack', date: '2024' },
  // Add more experiences here
];

export default function ExperiencePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const timer = setTimeout(() => {
        setHoveredIndex(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hoveredIndex]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mt-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono">Experience</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono">
          A timeline of my professional journey.
        </p>
      </div>
      <div className="relative mt-10 w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
        {experiences.map((experience, index) => (
          <div
            key={`${experience.date}-${index}`}
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full my-8`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`relative w-1/2 p-4 border rounded-lg transition-transform duration-300 ${
                index % 2 === 0 ? 'ml-0 pl-8' : 'mr-0 pr-8'
              } ${hoveredIndex === index ? 'transform scale-105 shadow-lg z-10' : ''}`}
              style={{ maxWidth: 'calc(50% - 2rem)' }}
            >
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full ${
                  index % 2 === 0 ? 'left-full ml-2' : 'right-full mr-2'
                }`}
              ></div>
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-300 ${
                  index % 2 === 0 ? 'left-full' : 'right-full'
                }`}
                style={{ width: hoveredIndex === index ? '1rem' : '2rem', transition: 'width 0.3s ease-in-out' }}
              ></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono">{experience.title}</h2>
              <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono">{experience.description}</p>
              <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-mono text-gray-500">{experience.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}