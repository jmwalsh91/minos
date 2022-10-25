import Link from 'next/link'
import React from 'react'
import AboutCard from '../components/AboutCard'



function About() {
  return (
    <div className='min-h-screen min-w-full flex flex-col bg-cyan-500'>
        <div className='flex flex-row justify-around items-center'>
        <AboutCard title="An Example" description='Science and mathematics Run parallel to reality, they symbolize it, they squint at it, They never touch it: consider what an explosion Would rock the bones of men into little white fragments and unsky the world If any mind for a moment touch truth.' />
        <AboutCard title="Another" description='Nature knows that people are a tide that swells and in time will ebb, and all their works dissolve ... As for us: We must uncenter our minds from ourselves. We must unhumanize our views a little and become confident as the rock and ocean that we are made from.' />
        <AboutCard title="Same" description='Science and mathematics Run parallel to reality, they symbolize it, they squint at it, They never touch it: consider what an explosion Would rock the bones of men into little white fragments and unsky the world If any mind for a moment touch truth.' />
        </div>
        <p className='text-2xl text-gray-200'>Second page.</p>
        <Link href="/">
            <button className='bg-slate-200 hover:bg-green-300 text-slate-800 font-bold py-2 px-4 rounded w-24 self-center'>
          home
        </button>
            </Link>
    </div>
  )
}

export default About