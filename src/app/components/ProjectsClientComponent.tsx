'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FontSizeCalculator } from './FontSizeCalculator';

type Project = {
  name: string;
  image: string;
  description: string;
  link?: string;
  skills: string[];
};

type ProjectsClientComponentProps = {
  projects: Project[];
};

export default function ProjectsClientComponent({ projects }: ProjectsClientComponentProps) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 w-full">
      {projects.map((project, index) => (
        <div
          key={project.name}
          className={`relative w-full h-72 p-4 border rounded-lg overflow-hidden transform transition-transform duration-500 bg-blue-500 hover:bg-blue-600 flip-${index}`}
        >
          <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-blue-600 p-4">
            <Image src={project.image} alt={project.name} title={project.name} width={128} height={128} className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36" />
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono mt-4">{project.name}</h2>
          </div>
          <div className={`absolute inset-0 backface-hidden flex flex-col items-center justify-between rotate-y-180 bg-gray-800 text-white opacity-0 hover:opacity-100 transition-opacity duration-500 p-4 project-desc-${index}`}>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-mono">{project.description}</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {project.skills.map(skill => (
                <span key={skill} className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs sm:text-sm md:text-base lg:text-lg">{skill}</span>
              ))}
            </div>
            {project.link && (
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm md:text-base lg:text-lg hover:bg-green-700">
                  Visit
                </button>
              </Link>
            )}
          </div>
        </div>
      ))}
      <FontSizeCalculator projects={projects} maxLength={100} minFontSize={14} maxFontSize={20} />
    </div>
  );
}
