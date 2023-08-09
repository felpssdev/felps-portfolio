import React from 'react'
import NotebookImage from '../../public/notebook-image.webp'
import EducationWeb from '../../public/web-education.png'
import MobileEducation from '../../public/education-mobile.png'
import PhoneImage from '../../public/phone-image.png'
import Image from 'next/image'

const EducationProjectCard = () => {
  return (
    <div className='h-[610px] w-[275px] md:h-[530px] md:w-[590px] relative flex flex-col justify-between items-center py-4 p-10 transition-all box-border'>
      <div className='flex text-2xl text-white font-bold'>
        <span>Task</span>
        <span className='text-purple-600'>Manager</span>
      </div>
      <div className='absolute top-16 left-6 md:left-12'>
        <div>
          <Image width={420} src={NotebookImage} alt='Notebook with Project Screen' />
        </div>
        <div className='absolute top-1 right-[17px] w-[225px] md:h-fit md:w-fit z-10 md:top-3 md:right-7 rounded overflow-hidden'>
          <Image width={355} src={EducationWeb} alt='Project Screen' />
        </div>
      </div>
      <div className='absolute top-32 -right-12 md:top-32 md:-right-4 z-20'>
        <div className='z-30 w-36 md:w-fit'>
          <Image width={235} src={PhoneImage} alt='Phone with Project Screen' />
        </div>
        <div className='absolute border-b-2 border-black top-1 right-10 w-[62px] md:top-[7px] md:right-[66px] md:w-fit md:h-fit rounded-lg overflow-hidden'>
          <Image width={100} src={MobileEducation} alt='Project Screen mobile' />
        </div>
      </div>
      <p className='text-white font-semibold text-justify text-sm md:text-base'>
        This <span className='text-purple-500'>Next.js</span> and <span className='text-purple-500'>TypeScript</span> project is a responsive task manager
        styled with <span className='text-purple-500'>Tailwind CSS</span>. Users can log tasks with schedules and dates,
        accessing a visually appealing and interactive interface.
        The app features both <span className='text-purple-500'>light</span> and <span className='text-purple-500'>dark</span> modes for user preference.
        Task data is managed within the app, offering seamless task organization
        and visualization.
      </p>
    </div>
  )
}

export default EducationProjectCard