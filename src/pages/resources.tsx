import React from 'react'
import AboutCard from '../components/AboutCard'



function resources() {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center">Resources</h1>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
            <AboutCard title="Writings" description="Texts about educations" />
            <AboutCard title="Talks" description="Talky talk talk talk--on camera!" />
            <AboutCard title="Websites" description="Handy dandy websites." />
            </div>
    </div>
  )
}

export default resources