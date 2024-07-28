import React from 'react';

const Footer = () => {
  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row gap-5 bg-zinc-900 p-8 md:p-20'>
      <div className='w-full md:w-1/2 flex flex-col justify-between font-["PP_mori"]'>
        <div className='headings'>
          <h1 className='text-6xl md:text-9xl uppercase -mb-4 md:-mb-8'>Eye-</h1>
          <h1 className='text-6xl md:text-9xl uppercase -mb-4 md:-mb-8'>Opening</h1>
        </div>
        <h3 className='text-lg md:text-2xl font-["PP_mori"]'>Ochi.</h3>
      </div>
      <div className='w-full md:w-1/2 flex justify-end items-center'>
        <div className='flex flex-wrap md:flex-nowrap space-x-4'>
          <button className='border border-white rounded-full px-3 py-1 hover:bg-white hover:text-zinc-900 transition duration-300'>
            <a href='#' className='text-white font-medium'>Facebook</a>
          </button>
          <button className='border border-white rounded-full px-3 py-1 hover:bg-white hover:text-zinc-900 transition duration-300'>
            <a href='#' className='text-white font-medium'>Instagram</a>
          </button>
          <button className='border border-white rounded-full px-3 py-1 hover:bg-white hover:text-zinc-900 transition duration-300'>
            <a href='#' className='text-white font-medium'>Twitter</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
