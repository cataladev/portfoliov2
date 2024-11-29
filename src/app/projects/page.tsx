'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Project = {
  name: string;
  image: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: 'catala.dev',
    image: '/glorp.png',
    description: 'The site you\'re on!.',
    link: 'https://catala.dev',
  },
  {
    name: 'Spark-A-Hack',
    image: '/spark-a-hack.png',
    description: 'Uses AI to suggest tailored project ideas to hackathon participants based on their interests, skills, and challenges they want to tackle.',
    link: 'https://devpost.com/software/spark-a-hack',
  },
  {
    name: 'Hack Tracker',
    image: '/hack-tracker.png',
    description: 'A simplified, customized experience to assist users in finding hackathons that match their requirements and passions.',
    link: 'https://devpost.com/software/hack-tracker',
  },
  {
    name: 'Night of Knights',
    image: '/night-of-knights.png',
    description: 'Night of Knights was my first ever large-scale project, it was done as a capstone project senior year of high school.',
    link: 'https://play.unity.com/en/games/27ee33fa-e1e3-4178-8acf-9e1f37546fd0/night-of-knights',
  },
  // Add more projects here
];

const calculateFontSize = (text: string, maxLength: number, minFontSize: number, maxFontSize: number) => {
  const length = text.length;
  if (length > maxLength) {
    return minFontSize;
  }
  return maxFontSize - ((maxFontSize - minFontSize) * (length / maxLength));
};

export default function Projects() {
  const [fontSizes, setFontSizes] = useState<number[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>(new Array(projects.length).fill(false));

  useEffect(() => {
    const sizes = projects.map(project => calculateFontSize(project.description, 100, 14, 20));
    setFontSizes(sizes);
  }, []);

  const handleFlip = (index: number) => {
    setFlipped(prev => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mt-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono">Projects</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-mono">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 w-full px-4">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={`relative w-full h-48 p-4 border rounded-lg overflow-hidden transform transition-transform duration-500 bg-blue-500 hover:bg-blue-600 ${flipped[index] ? 'rotate-y-180' : ''}`}
            onClick={() => handleFlip(index)}
          >
            <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-blue-600">
              <Image src={project.image} alt={project.name} title={project.name} width={128} height={128} className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32" />
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono mt-4">{project.name}</h2>
            </div>
            <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-between rotate-y-180 bg-gray-800 text-white opacity-0 hover:opacity-100 transition-opacity duration-500 p-4">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-mono" style={{ fontSize: `${fontSizes[index]}px` }}>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  Visit
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}