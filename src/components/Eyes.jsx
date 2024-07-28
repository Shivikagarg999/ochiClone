import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rot, setRot] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRot(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div data-scroll data-scroll-speed="-.2" className="relative eyes h-screen w-full">
      <img 
        className="bg-gray-200 max-w-full w-full h-full object-cover transform scale-120 entered loaded"
        data-component="lazyload"
        src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
        width="1440"
        height="921"
        data-src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
        alt="background"
      />
      <div className="nxt flex absolute gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="h-[15vw] w-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
          <div className="relative h-[10vw] w-[10vw] bg-black flex items-center justify-center rounded-full">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rot}deg)` }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
            >
              <div className="eyeball h-10 w-10 bg-white rounded-full"></div>
            </div>
            <h1 className='font-["PP_mori"]'>Play</h1>
          </div>
          
        </div>
        <div className="h-[15vw] w-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
          <div className="relative h-[10vw] w-[10vw] bg-black rounded-full flex items-center justify-center">
             <h1 className='font-["PP_mori"]'>Play</h1>
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rot}deg)` }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="eyeball h-10 w-10 bg-white rounded-full"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
