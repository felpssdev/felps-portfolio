import Image from 'next/image'
import React from 'react'
import wallpaper from '../../public/wpp4.jpg'

const ImageWrapper = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-0'>
      <Image
        src={wallpaper}
        alt='Wallpaper'
        quality="100"
        layout='fill'
      />
    </div>
  )
}

export default ImageWrapper