import React from 'react'



function AboutCard() {
  return (
    <div className='container bg-slate-100  h-96 w-96 shadow-2xl border-x-4 border-x-black border-y-4 border-y-slate-800 m-10'>
        <div className='flex flex-col items-center justify-center p-4'>
            <h1 className='text-5xl  leading-normal font-extrabold text-black'>
        The Lorem
        </h1>
        <p className='text-lg text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab natus odit quae eveniet. Ipsam quia, eos nobis eaque cupiditate numquam vitae impedit id dicta qui ut itaque? Laborum, consequatur suscipit?</p>
        <button className="p-4 m-4 self-center mix-blend-multiply bg-gray-300 opacity-80 hover:opacity-90 hover:border-cyan-600 border-4 border-black mt-10"> Learn More </button>
        </div>
        </div>
  )
}

export default AboutCard