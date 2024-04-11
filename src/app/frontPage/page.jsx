"use client";
import Image from "next/image";
import mainLogo from "../../imgs/main_150x_1.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  return (
    <main className="overflow-x-hidden" suppressHydrationWarning>
      <nav className="w-full h-[7vh] px-[2vh] fixed top-0 z-10 flex justify-between">

        <div className="flex">
          
          <Sheet>
            <SheetTrigger className="w-[1.75vw] p-0 ml-[0.35vw] bg-transparent flex flex-col">
                <div className="w-full h-[.25vh] mt-[3vh] bg-black"></div>
                <div className="w-[65%] h-[.25vh] mt-[.75vh] bg-black"></div>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Image
            src={mainLogo}
            className="w-[8vw] ml-[1.25vw] h-full"
            alt="No image"
          ></Image>
        
        </div>
 
        <div
          id="searchAndCart"
          className="mr-[.5vw] flex justify-between gap-2"
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-[1.4vw] rotate-[270deg] translate-y-[0.25vh]"
            >
              <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
            </svg>
          </button>

          <button className="py-[2vh] relative">
            <div
              className="w-[1vw] h-[1vw] rounded-[50%] 
                          bg-black text-white font-bold text-center
                          absolute -right-[.25vw] top-[1.25vh]"
            >
              <div className="absolute -top-[.2vh] left-[.27vw]">0</div>
            </div>
            <svg viewBox="0 0 30 30" className="w-[1.3vw]">
              <g>
                <g>
                  <path d="M20,6V5c0-2.761-2.239-5-5-5s-5,2.239-5,5v1H4v24h22V6H20z M12,5c0-1.657,1.343-3,3-3s3,1.343,3,3v1h-6V5z M24,28H6V8h4v3    h2V8h6v3h2V8h4V28z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </nav>

      <div
        className="w-full min-h-screen  
                        bg-[url('../imgs/Festive-Banners-1900X1200.webp')] bg-cover bg-center"
      ></div>

      <div className="w-full min-h-screen  bg-gradient-to-tr from-zinc-900 to-gray-700"></div>
    </main>
  );
}
