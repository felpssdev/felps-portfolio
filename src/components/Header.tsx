import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='px-10 py-4 md:py-2 2xl:py-4 bg-black text-white flex items-center justify-between z-20'>
      <div className='flex gap-2 font-bold text-xl 2xl:text-3xl'>
        <span>Felipe</span>
        <span className='text-purple-800'>Santos</span>
      </div>
      <Navbar />
    </div>
  )
}

export default Header