import ProjectsClientComponent from '../components/ProjectsClientComponent';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carlos Catala | Projects",
  description: "Carlos Catala is a undergraduate student at the University of Central Florida and an aspiring software engineer.",
  keywords:[
        "Carlos Catala",
        "Software Engineer",
        "UCF",
        "University of Central Florida",
        "Knight Hacks",
        "Web Development",
        "Full stack",
    ],
    openGraph: {
      type: "website",
      title: "Carlos Catala | Projects",
      description:
      "My projects that I have worked on as a software engineer and undergraduate student at the University of Central Florida.",
      url: "https://catala.dev/projects",
      images: [{ url: "https://catala.dev/" }],
      },
};


type Project = {
  name: string;
  image: string;
  description: string;
  link?: string;
  skills: string[];
};

const projects: Project[] = [
  {
    name: 'catala.dev',
    image: '/glorp.png',
    description: 'The site you\'re on!',
    link: 'https://catala.dev',
    skills: ['Next', 'React', 'Tailwind CSS'],
  },
  {
    name: 'Spark-A-Hack',
    image: '/spark-a-hack.png',
    description: 'A way to suggest project ideas to hackathon participants based on their interests and skills they want to tackle.',
    link: 'https://devpost.com/software/spark-a-hack',
    skills: ['React', 'Tailwind', 'Gemini API', 'TRPC'],
  },
  {
    name: 'Hack Tracker',
    image: '/hack-tracker.png',
    description: 'A simplified, customized experience to assist users in finding hackathons that match their requirements and passions.',
    link: 'https://devpost.com/software/hack-tracker',
    skills: ['React', 'Tailwind', 'Python'],
  },
  {
    name: 'Night of Knights',
    image: '/night-of-knights.png',
    description: 'Night of Knights was my first ever large-scale project, it was done as a capstone project senior year of high school.',
    link: 'https://play.unity.com/en/games/27ee33fa-e1e3-4178-8acf-9e1f37546fd0/night-of-knights',
    skills: ['Unity', 'C#'],
  },
  // Add more projects here
];

export default function ProjectsComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="text-center mt-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono animate-delay-150 animate-fade-up">Projects</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono animate-delay-150 animate-fade-up">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <ProjectsClientComponent projects={projects} />
    </div>
  );
}