import { useEffect, useState } from "react";

export default function BlackHole() {
  const [blackHoleHover, setBlackHoleHover] = useState(false);


  useEffect(() => {
    console.log("a")
  }, [])

  return (
    <div className="relative h-full w-full">
      <div
        onMouseEnter={() => setBlackHoleHover(true)}
        onMouseLeave={() => setBlackHoleHover(false)}
        className="absolute left-[50%] z-[2] h-[34vh] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-[120px] lg:h-[52vh] lg:rounded-full"
      ></div>
      <div
        className={`${blackHoleHover ? "opacity-100" : "opacity-40"} absolute top-[-56vh] z-[-2] flex h-screen w-full flex-col bg-blend-darken duration-300 lg:top-[-50vh]`}
      >
        <video
          autoPlay
          muted
          loop
          className="h-full min-h-[100vh] w-full rotate-180 object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <div className="z-[-2] min-h-screen bg-gradient-to-b from-[#030014] via-[#060018] via-30% to-[#0A0A0A]" />
      </div>
    </div>
  );
}
