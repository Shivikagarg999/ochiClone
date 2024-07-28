import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  
  return (
    <div data-scroll data-scroll-speed='-.4' className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        {["we create", "eye opening", "presentations"].map((item,index)=>{
            return   <div className='masker'>
            <div className='w-fit flex items-center'>
              {index===1 && (<motion.div initial={{width:"0"}} 
              animate={{width:"9vw"}}
              transition={{ease:[0.76,0,0.24,1],duration: 1}} 
              className='h-[5vw] w-[9vw] bg-green-500 rounded-md mr-3 relative'>
              </motion.div>)}
            <h1 className='uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-medium font-[ppmori]'>
            {item}
            </h1>
            </div>
        </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["for public and private companies", "from the first pitch to ipo",].map((item)=>{
           return <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        })}

        <div className='start flex items-center gap-5'>
      <div className='px-5 py-2 border-[2px] border-zinc-800 uppercase font-light text-small rounded-full'>Start the project</div>
      <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-800 rounded-full'><FaLongArrowAltUp /></div></div>
      </div>
    </div>
  )
}

export default Landing 