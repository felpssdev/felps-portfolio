import { CheckCircle } from 'lucide-react'
import React from 'react'

const EmailSent = () => {
  return (
    <div className='z-10 absolute bottom-32 2xl:bottom-44 self-center h-20 w-80 bg-white/50 border-2 rounded-xl overflow-hidden flex flex-col items-center border-gray-500'>
      <div className='flex w-full gap-4 h-full px-4 items-center'>
        <CheckCircle className='text-purple-800' />
        <div>
          <p className='text-black text-lg font-bold'>Success</p>
          <p className='font-semibold text-gray-800 text-sm'>Your e-mail has been delivered!</p>
        </div>
      </div>
      <div className='w-full h-2 absolute bottom-0 bg-purple-800'></div>
      <div className='w-full h-2 absolute bottom-0 bg-purple-500 animate-decrease'></div>
    </div>
  )
}

export default EmailSent