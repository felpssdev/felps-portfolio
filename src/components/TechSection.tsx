import React from 'react'
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiNodedotjs, SiMongodb, SiMysql, SiTailwindcss, SiTestinglibrary, SiBootstrap, SiRedux, SiExpress, SiNodemon, SiGit, SiGithub, SiDocker } from 'react-icons/si'

const TechSection = () => {
  return (
    <section className='flex flex-col sm:flex sm:flex-col md:flex-col xl:flex-row gap-2 h-fit w-[80%] self-center'>
      <div className='flex flex-col gap-2 items-center justify-center self-center font-bold text-white text-xl h-fit py-6 px-6 bg-white/10 w-[80%] border-4 border-black hover:border-purple-500 hover:bg-white/20 transition-colors rounded-xl mt-6 mb-6'>
        <div className='self-center pb-6 text-2xl flex gap-2'>
          <span>Front</span>
          <span className='text-purple-600'>End</span>
        </div>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#F7DF1E]'>
              <SiJavascript />
            </span>
            <p>JavaScript</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#3178C6]'>
              <SiTypescript />
            </span>
            <p>TypeScript</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#61DAFB]'>
              <SiReact />
            </span>
            <p>React</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <SiNextdotjs />
            <p>Next.js</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#38B2AC]'>
              <SiTailwindcss />
            </span>
            <p>Tailwind</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#FF5733]'>
              <SiTestinglibrary />
            </span>
            <p>RTL</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#7952B3]'>
              <SiBootstrap />
            </span>
            <p>Bootstrap</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#61DAFB]'>
              <SiRedux />
            </span>
            <p>Redux</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2 items-center justify-center self-center font-bold text-white text-xl h-fit py-6 px-6 bg-white/10 w-[80%] border-4 border-black hover:border-purple-500 hover:bg-white/20 transition-colors rounded-xl mt-6 mb-6'>
        <div className='self-center pb-6 text-2xl flex gap-2'>
          <span>Back</span>
          <span className='text-purple-600'>End</span>
        </div>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#F7DF1E]'>
              <SiJavascript />
            </span>
            <p>JavaScript</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#3178C6]'>
              <SiTypescript />
            </span>
            <p>TypeScript</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#1E90FF]'>
              <SiExpress />
            </span>
            <p>Express.js</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <SiNextdotjs />
            <p>Next.js API</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#1F6F49]'>
              <SiNodemon />
            </span>
            <p>Nodemon</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#339933]'>
              <SiNodedotjs />
            </span>
            <p>Node.js</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#4479A1]'>
              <SiMysql />
            </span>
            <p>MySQL</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#47A248]'>
              <SiMongodb />
            </span>
            <p>MongoDB</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2 items-center self-center font-bold text-white text-xl h-fit xl:h-[552px] 1402px:h-[326px] 2xl:h-[328px] py-6 px-6 bg-white/10 w-[80%] border-4 border-black hover:border-purple-500 hover:bg-white/20 transition-colors rounded-xl mt-6 mb-6'>
        <div className='self-center pb-6 text-2xl flex'>
          <span>Dev</span>
          <span className='text-purple-600'>Ops</span>
        </div>
        <div className='flex flex-col gap-4 items-center justify-start w-full'>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#F05032]'>
              <SiGit />
            </span>
            <p>Git</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#FFFFFF]'>
              <SiGithub />
            </span>
            <p>GitHub</p>
          </div>
          <div className='flex gap-2 h-10 w-36 items-center justify-start'>
            <span className='text-[#2496ED]'>
              <SiDocker />
            </span>
            <p>Docker</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSection