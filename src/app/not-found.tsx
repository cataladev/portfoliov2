import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex flex-col text-6xl min-h-screen items-center justify-center pb-32 font-mono">
          <div className="flex items-center">
            <Image src="/glorp.png" alt="gatito" width={300} height={300} />
          </div>
          
          <div className="flex text-3xl "> 
            <h1> You landed on the wrong planet.</h1> {/* add more info here and tweak sizing*/}
          </div> 
    
          <div className="mt-4 flex space-x-8 items-center">
            <Link href="/" className="text-center bg-blue-500 hover:bg-blue-700 font-mono py-3 px-8 rounded-3xl">
              Home
            </Link>
          </div>
        </div>
      );
  }