import React from 'react'
const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className='cardcontainer rounded-xl h-[50vh] w-1/2'>
        <div className='relative card rounded-xl p-6 h-full w-full bg-[#004D43]'>
        <img className=' h-[9vh] bg-cover' src='https://mir-s3-cdn-cf.behance.net/user/276/d6cf91925253957.628fe2ddd3b7a.png'/>
        <button className=' absolute left-10 bottom-10 btn px-5 h-[3vw] border-zinc-100 rounded-full border-2 font-["PP_mori"]'>&copy;2019-2024</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
      <div className='card rounded-xl flex flex-col justify-center items-center h-full w-1/2 bg-[#102D38]'>
        <img className='h-[8vw]' src='https://seeklogo.com/images/C/clutch-co-logo-CE7F48313C-seeklogo.com.png'/>
        <button className='px-4 btn h-[3vw]  border-zinc-100 uppercase rounded-full border-2 font-["PP_mori"]'>rating 5.5 on clutch</button>
      </div>
      <div className='card rounded-xl flex flex-col  justify-center items-center h-full w-1/2 bg-[#192826]'>
      <img className= "h-[7vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"  alt="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
      <button className='px-4 m-4 btn h-[3vw]  border-zinc-100 uppercase rounded-full border-2 font-["PP_mori"]'>successfull bussiness bootcampnpm </button>
       </div>
      </div>
    </div>
  )
}

export default Cards
