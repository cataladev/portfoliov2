import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TransitionLink } from "./components/TransitionLink";

export default function Home() {
  return (
    <div className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl min-h-screen items-center justify-center pb-32 pt-16 sm:pt-24 md:pt-32 font-mono">
      <div className="flex flex-col items-center">
        <h1 className="text-center"> Hey, I&apos;m Carlos! </h1>
      </div>
      
      <div className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl mt-8 text-center"> 
        <h1> I&apos;m an undergraduate student at the University of Central Florida.</h1>
      </div> 

      <div className="flex flex-col items-center mt-4">
        <Image src="/goober.png" alt="gatito" width={200} height={200} className="mt-4 transition-transform duration-500 animate-spin" />
      </div>

      <div className="mt-16 flex flex-col md:flex-row space-y-4 md:space-x-8 items-center">
        <TransitionLink href="/projects">
          <span className="text-center bg-blue-500 hover:bg-blue-700 font-mono py-4 px-8 rounded-3xl text-base sm:text-lg md:text-xl lg:text-2xl">Projects</span>
        </TransitionLink>
        <Link href="/resume.pdf" target= "_blank" className="text-center bg-blue-500 hover:bg-blue-700 font-mono py-3.5 px-9 rounded-3xl text-base sm:text-lg md:text-xl lg:text-2xl">
          Resume
        </Link>
      </div>
    </div>
  );
}
