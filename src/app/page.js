"use client"
import Image from "next/image";
import {Button as Btn} from "../components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Btn onClick={()=>{console.log("What is happening");let i = prompt("What the helll.");console.log(i);}} >Click Me</Btn>
    </main>
  );
}
