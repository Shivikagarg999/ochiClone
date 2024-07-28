import React from 'react'

const Main = () => {
  return (
    <div className='w-full px-20 py-20 text-black bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
     <h1 className="font-['Neue_Montreal'] text-6xl tracking-tight"> Lorem ipsum dolor sit amet,distinctio magnam cupiditate in provident nobis. Ea molestias minus, sed nihil nemo architecto laborum suscipit delectus iure.</h1>
     
     <div className='abt flex justify-between border-t-2 border-b-2 pb-28 border-zinc-500 mt-14'>
        <p className='mt-3 font-["PP_mori"]'>what you can expect</p>
        <div className='w-[40vw] flex gap-10 mt-7'>
            <p className='w-[20vw] font-["PP_mori"]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio vero culpa aut modi laboriosam quam. Animi blanditiis distinctio nemo voluptates inventore eligendi et, veritatis eos iusto accusantium, dignissimos sunt odit ea quas totam! Omnis voluptate excepturi eum dolorum nihil aut!</p>
            <div className='heads mt-20 font-["PP_mori"]'>
                <h3>S</h3>
                <h3>facebook</h3>
                <h3>behance</h3>
                <h3>instagram</h3>
                <h3>linkedin</h3>
            </div>
           </div>
     </div>

    <div className='w-full flex gap-5 pt-10 mt-20 bg-[#CDEA68] text-black'>
        <div className='w-1/2'>
             <h1 className='text-7xl font-["PP_mori"]'>Our approach</h1>
            <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>
               Read more
               <div className='w-2 h-2 rounded-full bg-white'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-slate-400 '>
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover object-center w-full h-full"/>
        </div>
    </div>

    </div>
  )
}

export default Main
