'use client'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer.', 'Front End Developer.', 'Back End Developer.'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 700,
      loop: true,
      showCursor: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='z-10 text-white font-bold px-24 flex flex-col gap-6'>
      <span className='text-2xl'>{"Hi, I'm"}</span>
      <p className='text-6xl text-purple-800'>Felipe</p>
      <div>
        <span ref={el} className='text-4xl' />
      </div>
    </div>
  )
}

export default Hero