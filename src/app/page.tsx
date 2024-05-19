import {Hero} from "@/components/Hero/hero";
import { HookLine } from "@/components/HookLine/hookline";
import Navbar from "@/components/Navbar/navbar";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative ">
      
        <div className="w-full p-2 flex justify-center items-center z-10 border-b border-[#a1a2a2]  ">
          <Navbar />
        </div>
        <div className="w-full hero p-0 mt-0 relative">
          <Hero />
        </div>
        
        <div className="min-h-screen relative">
          <div className="absolute bg-black w-full h-full -z-0 -top-0 left-0 bg-grid-white opacity-20 pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div></div>
    </main>
  );
}
