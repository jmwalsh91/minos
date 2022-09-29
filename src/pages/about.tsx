import React from 'react'
import AboutCard from '../components/AboutCard'



function About() {
  return (
    <div className='min-h-screen min-w-full flex flex-col bg-cyan-500'>
        <AboutCard />
        <p className='text-2xl text-gray-200'>Second page.</p>
        <button className='bg-slate-200 hover:bg-green-300 text-slate-800 font-bold py-2 px-4 rounded'>
          Button
        </button>
    </div>
  )
}

export default About