import React, {ReactNode} from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
interface SpotlightPreviewProps {
    children: ReactNode;
  }
export function SpotlightPreview({children}: SpotlightPreviewProps) {
  return (
    <div className="h-full w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden -z-20 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {children}
    </div>
  );
}
