import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='px-10 py-4 bg-black text-white flex items-center justify-between z-20 shadow-lg shadow-black'>
      <div className='flex gap-2 font-bold text-3xl'>
        <span>Felipe</span>
        <span className='text-purple-800'>Santos</span>
      </div>
      <Navbar />
    </div>
  )
}

export default Header