"use client"
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import davinci from '@/app/assets/davinci.svg'
import finalcut from '@/app/assets/finalcut.svg'
import premierepro from '@/app/assets/premierepro.svg'
import aftereffects from '@/app/assets/aftereffects.svg'
import magic from '@/app/assets/magic.png'
import growth from '@/app/assets/growth.png'
import Image from "next/image";
import React from "react";
import SparklesText from "@/components/magicui/sparkles-text";


export function OrbitingCirclesDemo() {
    const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  const smallRadius = isMobile?50 : 80;
  const bigRadius = isMobile?140 : 150;
  return (
    <div className=" relative flex aspect-square lg:h-[51vh] w-[80vw] sm:w-[55vw] lg:w-[30vw] items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-extrabold leading-none text-transparent dark:from-cyan-500 dark:to-cyan-200/100">
      <SparklesText text="Viral" />
        
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent "
        duration={20}
        delay={20}
        radius={smallRadius}
      >
        <Image src={davinci} alt="davinci" />

      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={smallRadius}
      >
        <Image src={aftereffects} alt="aftereffects"  />

      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={bigRadius}
        duration={20}
      >
        <Image src={premierepro} alt="premierepro"  />

      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={bigRadius}
        duration={20}
        delay={20}
      >
        <Image src={finalcut} alt="finalcut" />
        

      </OrbitingCircles>
    </div>
  );
}
