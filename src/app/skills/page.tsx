import Image from 'next/image';

type SkillCategory = {
  name: string;
  logo: string;
};

type Skills = {
  Languages: SkillCategory[];
  Packages: SkillCategory[];
  Tools: SkillCategory[];
};

const skills: Skills = {
  Languages: [
    {name: 'Python', logo: '/python.svg'},
    { name: 'TypeScript', logo: 'typescript.svg' },
    { name: 'Java', logo: '/java.svg' },
    { name: 'JavaScript', logo: 'javascript.svg' },
    { name: 'C', logo: '/c.svg' },
    { name: 'C#', logo: '/csharp.svg' },
    { name: 'C++', logo: '/cpp.svg' },
    { name: 'HTML', logo: '/html.svg' },
    { name: 'CSS', logo: '/css.svg' },
    // Add more languages here if time comes
  ],
  Packages: [
    { name: 'React', logo: 'react.svg' },
    { name: 'Tailwind', logo: 'tailwind.svg' },
    {name: 'Next.js', logo: '/nextjs.svg'},
    {name: 'tRPC', logo: '/trpc.svg'},
    {name: 'Node.js', logo: '/nodejs.svg'},
    {name: 'Selenium', logo: '/selenium.svg'},
    {name: 'Discord.Py', logo: '/discord.png'},
    {name: 'OpenAI API', logo: '/openai.svg'},
    {name: 'Google Gemini API', logo: '/gemini.svg'},
    // Add more packages here if time comes
  ],
  Tools: [
    { name: 'Github', logo: '/github-mark.svg' },
    { name: 'Git', logo: '/Git.svg' },
    { name: 'VSCode', logo: '/vscode.svg' },
    { name: 'Figma', logo: '/Figma.svg' },
    { name: 'Vercel', logo: '/vercel.svg' },
    { name: 'Unity', logo: '/unity.svg' },
    {name: 'Godot', logo: '/Godot.svg'},
    {name: 'Prisma', logo: '/prisma.svg'},
    {name: 'Drizzle', logo: '/drizzle.jpg'},
    {name: 'Docker', logo: '/docker.svg'},
    {name: 'Supabase', logo: '/supabase.svg'},
    // Add more tools here  if time comes
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mt-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono">Skills</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono">
          After working on projects and gaining experience this is what I have learnt.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10 gap-1 w-full">
        {Object.keys(skills).map((category) => (
          <div key={category} className="m-4 p-4 border rounded-lg w-full max-w-4xl">
            <div className="flex justify-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono">{category}</h2>
            </div>
            <div className="flex flex-wrap justify-around">
              {skills[category as keyof Skills].map((skill: SkillCategory) => (
                <div key={skill.name} className="m-2">
                  <Image src={skill.logo} alt={skill.name} title={skill.name} width={48} height={48} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
