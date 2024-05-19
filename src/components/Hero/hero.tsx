"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import VideoComp from '../VideoComp/VideoComp'
import { motion, Variants } from 'framer-motion'
import { AnimatedGradientTextDemo } from "./AnimatedGradientTextDemo";

export function Hero() {

  const fadeinAnimation: Variants = {
    hidden: {
      opacity: 1,
      y: 0,
      filter: "blur(0.5rem)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0)",
      transition: {
        staggerChildren: 0.3,
        duration: 0.7,
        ease: "easeIn",
      }
    },
  }

  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <AnimatedGradientTextDemo/>
      <ContainerScroll
        titleComponent={
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeinAnimation}

          >
            <motion.h1
              variants={fadeinAnimation}
              className="text-4xl font-semibold text-black dark:text-white leading-none ">
               <span className="text-4xl font-bold text-white ">
                Transform your <br />
                </span>
              <motion.p variants={fadeinAnimation} className="text-4xl md:text-[6rem] bg-gradient-to-br from-cyan-400 via-cyan-200 to-cyan-400 bg-clip-text text-transparent font-bold mt-1 leading-none">
                Visions into Reality
              </motion.p>
            </motion.h1>
          </motion.div>
        }
      >
        <VideoComp  />
      </ContainerScroll>
    </div>
  );
}




// import { motion } from "framer-motion";

// function Hero() {
//   return (
//     <div className='w-full p-20 flex flex-col items-center '>
//       <h1 className='font-extrabold text-8xl mb-10 text-center leading-tight   '>
//       Transform your <br/> Visions into Reality
//       </h1>
//       <VideoComp/>
//     </div>
//   )
// }
// export default Hero




