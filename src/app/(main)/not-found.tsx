import Image from "next/image";

export default function Custom404() {
    return (
        <div className="flex items-center">
            <Image src="/glorp.png" alt="glorp" width={600} height={600}/>
            {/* <h1>404 - Page Not Found</h1> or sum like that js add sum more */}
        </div>
    )
  }