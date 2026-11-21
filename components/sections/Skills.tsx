"use client"
import React from 'react'
import {motion} from "framer-motion"
import { technologies } from '@/constants'
import { Card } from '../ui/card'
import Image from 'next/image'

const Skills = () => {
  
  return (
    <section id="skills" className='container mx-auto px-4 py-20'>
      <h2 className='text-3xl font-bold mb-12 text-center'><span className='text-primary'>Skills</span> & Technologies</h2>
      <motion.div
      initial={{opacity:0 , y:20}}
      animate={{opacity:1 , y:0}}
      transition={{duration:0.5}}
      className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8'
      >
        {
          technologies.map((tech , index)=>(
            <Card
            key={index}
            className='p-3 sm:p-4 flex flex-col items-center justify-center hover:border-primary transition-colors'
            >
              <Image
              src={tech.logo}
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
              className='mb-2 w-10 h-10 sm:w-12 sm:h-12 object-contain'
              />
              <span className='text-xs sm:text-sm font-medium text-center'>{tech.name}</span>
            </Card>
          ))
        }
      </motion.div>
    </section>
  )
}

export default Skills