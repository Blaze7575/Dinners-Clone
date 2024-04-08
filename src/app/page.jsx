"use client"
import Image from "next/image";
import mainLogo from "../imgs/main_150x_1.svg";


export default function Home() {
  return (
      <main className="overflow-x-hidden relative" suppressHydrationWarning>

        <nav className="h-[8vh] px-[2vh] bg-slate-600 flex justify-between
                sticky top-0">

          <div className="flex">
            <button className="w-[1.5vw] p-0 m-0 inline bg-transparent">
              <div className="w-full h-[.25vh] mt-[.5vh] bg-black"></div>
              <div className="w-[65%] h-[.25vh] mt-[.8vh] bg-black"></div>
            </button>
            <Image
              src={mainLogo}
              className="w-[100px] h-[4vh]"
              alt="No image"
            ></Image>
          </div>

          <div id="searchAndCart">

          </div>
        </nav>

        {/* bg-[url('/img/hero-pattern.svg')] */}
        <div className="w-full min-h-screen bg-gradient-to-l from-cyan-500 to-blue-500 
                hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 
                transition duration-1000 ease-in-out">

        </div>
      </main>
  );
}
