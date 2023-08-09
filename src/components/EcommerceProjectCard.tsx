import React from 'react'
import NotebookImage from '../../public/notebook-image.webp'
import EcommerceWeb from '../../public/web-ecommerce.png'
import MobileEcommerce from '../../public/mobile-ecommerce.png'
import PhoneImage from '../../public/phone-image.png'
import Image from 'next/image'

const EcommerceProjectCard = () => {
  return (
    <div className='h-[610px] w-[275px] md:h-[530px] md:w-[590px] relative flex flex-col justify-between items-center py-4 p-10 transition-all box-border'>
      <div className='flex text-2xl text-white font-bold'>
        <span>Shoe</span>
        <span className='text-purple-600'>Store</span>
      </div>
      <div className='absolute top-16 left-6 md:left-12'>
        <div>
          <Image width={420} src={NotebookImage} alt='Notebook with Project Screen' />
        </div>
        <div className='absolute top-1 right-[17px] w-[225px] md:h-fit md:w-fit z-10 md:top-3 md:right-7 rounded overflow-hidden'>
          <Image width={355} src={EcommerceWeb} alt='Project Screen' />
        </div>
      </div>
      <div className='absolute top-32 -right-12 md:top-32 md:-right-4 z-20'>
        <div className='z-30 w-36 md:w-fit'>
          <Image width={235} src={PhoneImage} alt='Phone with Project Screen' />
        </div>
        <div className='absolute border-b-2 border-black top-1 right-10 w-[62px] md:top-[7px] md:right-[66px] md:w-fit md:h-fit rounded-lg overflow-hidden'>
          <Image width={100} src={MobileEcommerce} alt='Project Screen mobile' />
        </div>
      </div>
      <p className='text-white font-semibold text-justify text-sm md:text-base'>
        This project is a responsive sneaker store built with
        <span className='text-purple-500'> TypeScript,
          Next.js, and Tailwind CSS</span>.
        It seamlessly integrates <span className='text-purple-500'>MongoDB</span> for
        database functionality. Users can explore a variety of sneakers,
        with SSR ensuring fast load times. <span className='text-purple-500'>Tailwind CSS</span> ensures consistent
        styling, while <span className='text-purple-500'>MongoDB</span> stores product data and user information for
        an enhanced shopping experience.
      </p>
    </div>
  )
}

export default EcommerceProjectCard