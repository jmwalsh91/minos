import React from 'react'
import { NextPage } from 'next/types'
import Messenger from '../components/Messenger'

type Props = {}

const Message: NextPage = ({}: Props) => {
  return (
    <div className='flex flex-col'>

    <Messenger />
    </div>
  )
}

export default Message