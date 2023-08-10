import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-3 px-24 text-sm 2xl:py-6 2xl:px-24 flex flex-col gap-2 2xl:gap-4 items-center justify-center z-10'>
      <div className='flex gap-4'>
        <Link href="https://github.com/felpssdev" target='blank' className='text-black bg-white w-8 h-8 2xl:w-10 2xl:h-10 rounded-full flex items-center justify-center transition-all duration-100 cursor-pointer hover:scale-125 hover:text-purple-800'>
          <Github />
        </Link>
        <Link href="https://www.linkedin.com/in/felipesantos-dev/" target='blank' className='text-black bg-white w-8 h-8 2xl:w-10 2xl:h-10 rounded-full flex items-center justify-center transition-all duration-100 cursor-pointer hover:scale-125 hover:text-purple-800'>
          <Linkedin />
        </Link>
      </div>
      <div className='text-white'>
        <span className='text-xs 2xl:text-sm font-bold'>Felipe S. - © 2023</span>
      </div>
    </div>
  )
}

export default Footer