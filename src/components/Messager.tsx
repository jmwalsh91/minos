import React from 'react'



function Messager() {
  return (
    <div className='bg-blue-600 shadow-md w-96'>

        <h2 className='text-2xl text-gray-200'>Messager</h2>
        <textarea className="textarea textarea-primary" placeholder="from"></textarea>
        <textarea className="textarea textarea-primary" placeholder="message"></textarea>
    </div>
  )
}

export default Messager