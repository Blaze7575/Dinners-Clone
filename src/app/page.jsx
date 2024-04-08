"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  return (
      <div 
      className="min-w-screen min-h-screen pt-10
        flex flex-col items-center gap-10">
        <Button
        className="px-20 py-10 font-bold text-5xl scale-75"
        onClick={()=>{router.push("/frontPage")}}
      >Front Page</Button>
      </div>
  );
}
