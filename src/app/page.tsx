import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl min-h-screen items-center justify-center pb-32 font-mono">
      <div className="flex items-center">
        <h1> Hey, I&apos;m Carlos! </h1>
        <Image src="/goober.png" alt="gatito" width={200} height={200} />
      </div>
      
      <div className="flex text-xl sm:text-2xl md:text-3xl"> 
        <h1> I&apos;m an undergraduate student at the University of Central Florida.</h1>
      </div> 

      <div className="mt-16 flex space-x-8 items-center">
        <Link href="/projects" className="text-center bg-blue-500 hover:bg-blue-700 font-mono py-3 px-8 rounded-3xl text-lg sm:text-xl md:text-2xl">
          Projects
        </Link>
        <Link href="/resume.pdf" className="text-center bg-blue-500 hover:bg-blue-700 font-mono py-3 px-8 rounded-3xl text-lg sm:text-xl md:text-2xl">
          Resume
        </Link>
      </div>
    </div>
  );
}
