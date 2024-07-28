import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-20'>
      <div  className='w-full px-10 border-b-[1px] border-zonc-700 pb-20'>
        <h1 className='text-8xl font-["PP_mori"]'>Featured Projects</h1>
      </div>
    <div className='px-20'>
    <div className='Cards w-full flex gap-10 mt-10'>
        <div className='cardcont relative w-1/2 h-[70vh] rounded-2xl'>
            
            <div className='w-full h-full bg-green-600 rounded-2xl overflow-hidden'>
                <img className=" h-full w-full" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"/>
            </div>
        </div>
        <div className='cardcont relative w-1/2 h-[70vh] rounded-2xl'>
        <h1 className='text-[#889e39] translate-x-1/2 top-1/2 -translate-y-1/2 absolute right-full z-[9] font-["PP_mori] text-8xl'>
          
            {"VISE".split("").map((item,index)=>(
                <span>{item}</span>
            ))}
        </h1>
          
            <div className='w-full h-full bg-green-600 rounded-2xl overflow-hidden'>
                <img className=" h-full w-full" src="https://i.pinimg.com/564x/66/42/6b/66426bde90053a80ca482f5ea8575ce6.jpg"/>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured
