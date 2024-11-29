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
    <div className="min-h-screen flex flex-col items-center justify-center pt-16">
      <div className="text-center mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono">Skills</h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-mono">
          After working on projects and gaining experience this is what I have learnt.
        </p>
      </div>
      <div className="flex flex-col items-center mt-4 gap-1 w-full">
        {Object.keys(skills).map((category) => (
          <div key={category} className="m-2 p-2 border rounded-lg w-full max-w-4xl">
            <div className="flex justify-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono">{category}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
              {skills[category as keyof Skills].map((skill: SkillCategory) => (
                <div key={skill.name} className="m-1">
                  <Image src={skill.logo} alt={skill.name} title={skill.name} width={40} height={40} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
