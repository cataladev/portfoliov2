'use client'

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
  { title: 'ShellHacks', description: 'I attended shellhacks, my first hackathon.', date: '2024' },
  { title: 'KnightHacks Organizer', description: 'I became an organizer for KnightHacks VIII.', date: '2024' },
  // Add more experiences here
].reverse();

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mt-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono">Experience</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono">
          A timeline of my professional journey.
        </p>
      </div>
      <div className="relative mt-10 w-full max-w-4xl flex">
        <div className="hidden sm:block w-1 bg-gray-300 mr-8"></div>
        <div className="flex flex-col w-full items-center">
          {experiences.map((experience, index) => (
            <div
              key={`${experience.date}-${index}`}
              className="flex justify-center w-full my-8"
            >
              <div
                className="relative w-full sm:w-3/4 p-4 border rounded-lg"
                style={{ maxWidth: 'calc(100% - 2rem)' }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono">{experience.title}</h2>
                <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono">{experience.description}</p>
                <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-mono text-gray-500">{experience.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
