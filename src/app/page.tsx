import {Hero} from "@/components/Hero/hero";
import { HookLine } from "@/components/HookLine/hookline";
import Navbar from "@/components/Navbar/navbar";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen  ">
        <div className="w-full p-2 flex justify-center items-center z-10 border-b border-[#a1a2a2]  ">
          <Navbar />
        </div>
        <div className="w-full hero ">
          <Hero />
        </div>
    </main>
  );
}
