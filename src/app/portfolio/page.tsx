'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ImageWrapper from '@/components/ImageWrapper'
import EcommerceProjectCard from '@/components/EcommerceProjectCard'
import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import EducationProjectCard from '@/components/EducationProjectCard'
import { Dot } from 'lucide-react'

const Portfolio = () => {
  const [project, setProject] = useState<number>(1)

  return (
    <div className="w-screen h-screen flex flex-col justify-between z-10 scrollbar scrollbar-none overflow-scroll">
      <Header />
      <ImageWrapper />
      <div className='z-10 h-full w-full pb-6 bg-white/10 flex flex-col text-3xl items-center'>
        <div className='flex text-white font-bold pt-10 pb-4'>
          <span>Port</span>
          <span className='text-purple-600'>folio</span>
        </div>
        <div className='flex gap-4 items-center'>
          <div onClick={() => setProject(prev => prev === 1 ? 2 : prev - 1)} className={`${project === 1 ? 'cursor-default' : ''} text-2xl md:text-5xl text-white hover:text-purple-600 cursor-pointer transition-all`}>
            <AiOutlineLeft />
          </div>
          {project === 1 && <EcommerceProjectCard />}
          {project === 2 && <EducationProjectCard />}
          <div onClick={() => setProject(prev => prev === 2 ? 1 : prev + 1)} className={`${project === 2 ? 'cursor-default' : ''} text-2xl md:text-5xl text-white hover:text-purple-600 transition-all cursor-pointer`}>
            <AiOutlineRight />
          </div>
        </div>
        <div className='flex gap-2'>
          <Dot className={`${project === 1 ? 'text-white' : 'text-gray-500'} transition-all w-10 h-10`} />
          <Dot className={`${project === 2 ? 'text-white' : 'text-gray-500'} transition-all w-10 h-10`} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio