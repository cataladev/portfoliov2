import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl min-h-screen items-center justify-center pb-32 pt-16 sm:pt-24 md:pt-32 font-mono">
      <div className="flex flex-col md:flex-row items-center">
        <h1 className="text-center md:text-left"> Hey, I&apos;m Carlos! </h1>
        <Image src="/goober.png" alt="gatito" width={200} height={200} className="mt-4 md:mt-0 md:ml-4" />
      </div>
      
      <div className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl mt-8 text-center md:text-left"> 
        <h1> I&apos;m an undergraduate student at the University of Central Florida.</h1>
      </div> 

      <div className="mt-16 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
        <Link href="/projects" className="text-center bg-blue-500 hover:bg-blue-700 font-mono py-3 px-8 rounded-3xl text-base sm:text-lg md:text-xl lg:text-2xl">
          Projects
        </Link>
        <Link href="/resume.pdf" target= "_blank" className="text-center bg-blue-500 hover:bg-blue-700 font-mono py-3 px-8 rounded-3xl text-base sm:text-lg md:text-xl lg:text-2xl">
          Resume
        </Link>
      </div>
    </div>
  );
}
