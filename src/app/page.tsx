
import { Hero } from "@/components/Hero/hero";
import { OrbitingCirclesDemo } from "@/components/HookLine/OrbitingCirclesDemo";
import { HookLine } from "@/components/HookLine/hookline";
import Navbar from "@/components/Navbar/navbar";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import { AnimatedBeamMultipleInputDemo } from "@/components/VideoShow/AnimatedBeamMultipleInputDemo";
import VideoFrame from "@/components/VideoShow/videoFrame";
import VideoShow from "@/components/VideoShow/videoShow";
import Image from "next/image";
import { useState } from "react";
import { Lato } from "next/font/google";
import { ScrollBasedVelocityDemo } from "@/components/VideoShow/ScrollBasedVelocityDemo";
export default function Home() {

  return (
    <main className={`"min-h-screen relative "`}>
      <div className="w-full p-2 flex justify-center items-center z-10 border-b border-[#a1a2a2]  ">
        <Navbar />
      </div>
      <div className="w-full hero p-0 mt-0 relative">
        <Hero />
        <div className="absolute bg-black w-full h-full -z-10 -top-0 left-0 bg-grid-white opacity-20 pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        </div>
      </div>
      <div className="w-[100%] relativeṣ p-5 flex-col mx-auto items-center ">
        {/* <div className=" w-full sm:w-[90%] min-h-[60vh] flex flex-col md:flex-row justify-between 2xl:justify-around items-center p-5 mx-auto  ">
            <h1 className=" text-4xl md:text-5xl 2xl:text-8xl font-extrabold leading-relaxed pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-transparent dark:from-white dark:to-slate-900/10 ">
              Turn Boring <span>Videos</span> <br/> into <span>Viral Growth</span>
            </h1>
             <AnimatedBeamMultipleInputDemo/>
          </div> */}
        <div className=" w-full sm:w-[90%]  h-full flex flex-col md:flex-row justify-between 2xl:justify-around items-center px-5 mx-auto  ">
          <div className="w-full  h-full md:max-w-[60%] flex flex-col flex-wrap justify-between text-wrap text-left gap-4 ">

          <h1 className="pointer-events-none whitespace-pre-wrap dark:text-white font-extrabold text-4xl md:text-5xl leading-1 xl:leading-1 ">
            Turn booooooring videos into Viral Growth
          </h1>
          <p className=" text-base md:text-lg  italic dark:text-white  ">
          You filmed it, but it's flopping? Don't ditch it! Unleash your video's hidden potential with ninja-level editing and social media mastery. Boom! Millions watching your masterpiece.
          </p>
          </div>

          <OrbitingCirclesDemo />
          
        </div>

        <div className=" w-full sm:w-[90%] h-full px-5 mx-auto flex justify-center items-center " >
          <VideoShow />
        </div>
        <ScrollBasedVelocityDemo/>
      </div>


<div id="testimonials" ></div>
<div id="contact" ></div>
      
      <div className="min-h-screen relative">
        {/* <VideoFrame/> */}
        <div className="absolute w-full h-full -z-40 -top-0 left-0 bg-grid-white opacity-15 pointer-events-none inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]">
        </div>
      </div>
    </main>
  );
}
