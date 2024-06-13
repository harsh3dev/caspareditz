"use client";

import Image from "next/image";
import davinci from '@/app/assets/davinci.svg'
import finalcut from '@/app/assets/finalcut.svg'
import premierepro from '@/app/assets/premierepro.svg'
import aftereffects from '@/app/assets/aftereffects.svg'
import magic from '@/app/assets/magic.png'
import growth from '@/app/assets/growth.png'
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef, useState } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamMultipleInputDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  
  const [enable, setEnable] = useState(false);
  const handleTestClick=()=>{
    setEnable((prev)=>!prev);
  }

  return (
    <div
      className="relative flex h-full w-full max-w-[32rem] 2xl:max-w-[50rem] items-center justify-center overflow-hidden bg-background p-10 2xl:p-1 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref} className="h-[3rem] w-[3rem] 2xl:h-[6rem] 2xl:w-[6rem] " >
            <Image src={davinci} alt="davinci" />
            {/* <Icons.googleDrive className="h-6 w-6" /> */}
          </Circle>
          <Circle ref={div2Ref} className="h-[3rem] w-[3rem] 2xl:h-[6rem] 2xl:w-[6rem] " >
          <Image src={finalcut} alt="finalcut" />
            {/* <Icons.googleDocs className="h-6 w-6" /> */}
          </Circle>
          <Circle ref={div3Ref} className="h-[3rem] w-[3rem] 2xl:h-[6rem] 2xl:w-[6rem] ">
          <Image src={premierepro} alt="premierepro"  />
            {/* <Icons.whatsapp className="h-6 w-6" /> */}
          </Circle>
          <Circle ref={div4Ref} className="h-[3rem] w-[3rem] 2xl:h-[6rem] 2xl:w-[6rem] ">
          <Image src={aftereffects} alt="aftereffects"  />
            {/* <Icons.messenger className="h-6 w-6" /> */}
          </Circle>
          
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16 2xl:h-[6rem] 2xl:w-[6rem] ">
            {/* <span className="h-6 w-6">🪄</span> */}
            <Image src={magic} alt="fantasy" />
            {/* <Icons.openai className="h-6 w-6" /> */}
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="h-16 w-16 2xl:h-[6rem] 2xl:w-[6rem] ">
          {/* <span className="h-6 w-6">📈</span> */}
          <Image src={growth} alt="growth" />
          
            {/* <Icons.user className="text-black" /> */}
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}
