import React from 'react'



function Messenger() {
  return (
    <div className='w-96 h-96 shadow-md border-primary focus-within:border-secondary border-spacing-2 border-4 m-4 p-4 flex flex-col justify-between '>

        <h2 className='text-2xl text-gray-200'>Messenger</h2>
        <textarea className="textarea textarea-primary" placeholder="from"></textarea>
        <textarea className="textarea textarea-primary" placeholder="message"></textarea>
        <button className="btn btn-primary">Send</button>
    </div>
  )
}

export default Messenger