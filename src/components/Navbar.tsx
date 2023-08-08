'use client'
import { BookOpen, HomeIcon, Menu, Phone, User, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const pathname = usePathname()

  return (
    <div>
      <div onClick={() => setShowNav(prev => !prev)} className={`md:hidden cursor-pointer ${showNav ? 'hidden' : 'flex'}`}>
        <Menu />
      </div>
      <div className={`transition-all font-bold md:flex ${showNav ? 'flex flex-col gap-4 py-4 px-6 h-fit fixed right-0 top-0 bg-black/90 w-screen' : 'py-4 px-6 h-fit w-screen fixed top-[-340px] right-0 md:static md:w-fit md:flex md:gap-4'}`}>
        <div onClick={() => setShowNav(false)} className='self-end cursor-pointer md:hidden'>
          <X />
        </div>
        <Link href="/" className={`flex gap-2 ${pathname === '/' ? 'text-purple-500' : ''} border-b-2 md:w-fit md:border-b-black cursor-pointer hover:text-purple-500 hover:border-b-purple-500 duration-100 py-4 border-gray-90`}>
          <HomeIcon className='md:hidden' />
          <p>Home</p>
        </Link>
        <Link href="/about" className={`flex gap-2 ${pathname === '/about' ? 'text-purple-500' : ''} border-b-2 md:w-fit md:border-b-black cursor-pointer hover:text-purple-500 hover:border-b-purple-500 duration-100 py-4 border-gray-90`}>
          <User className='md:hidden' />
          <p>About</p>
        </Link>
        <Link href="/portfolio" className={`flex gap-2 ${pathname === '/portfolio' ? 'text-purple-500' : ''} border-b-2 md:w-fit md:border-b-black cursor-pointer hover:text-purple-500 hover:border-b-purple-500 duration-100 py-4 border-gray-90`}>
          <BookOpen className='md:hidden' />
          <p>Portfolio</p>
        </Link>
        <Link href="/contact" className={`flex gap-2 ${pathname === '/contact' ? 'text-purple-500' : ''} border-b-2 md:w-fit md:border-b-black cursor-pointer hover:text-purple-500 hover:border-b-purple-500 duration-100 py-4 border-gray-90`}>
          <Phone className='md:hidden' />
          <p>Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar