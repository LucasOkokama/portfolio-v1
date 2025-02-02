import { useBlackHoleContext } from "@/context/BlackHoleContext";
import { useState } from "react";

export default function BlackHole() {
  const { blackHoleHovered, setBlackHoleHovered } = useBlackHoleContext();

  return (
    <div className="relative h-full w-full">
      {/* Hover area */}
      <div
        onMouseEnter={() => setBlackHoleHovered(true)}
        onMouseLeave={() => setBlackHoleHovered(false)}
        className="absolute left-[50%] z-[2] h-[210px] w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-full sm:h-[240px] lg:h-[350px]"
      ></div>

      {/* Black hole */}
      <div
        className={`${blackHoleHovered ? "opacity-100 lg:top-[-45vh]" : "opacity-40 lg:top-[-57vh]"} absolute top-[-60vh] z-[-2] flex h-screen w-full flex-col bg-blend-darken delay-75 duration-1000`}
      >
        <video
          autoPlay
          muted
          loop
          className="h-full min-h-[100vh] w-full rotate-180 object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>

        {/* Transition layer */}
        <div className="z-[-2] min-h-screen bg-gradient-to-b from-[#030014] via-[#060018] via-30% to-[#0A0A0A]" />
      </div>
    </div>
  );
}
