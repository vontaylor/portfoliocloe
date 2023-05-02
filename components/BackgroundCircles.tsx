import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    
    initial={{ opacity: 0}}
    animate={{ scale: [0.5, 1.5, 1, 3, 1], opacity: [0.1, .3, .5, .8, 1], borderRadius: ["20%", "50%", "20%", "80%", "20%"] }}
    transition={{ duration: 20 }}
    
    className='relative flex justify-center items-center z-[0]'>
        <div className='absolute border border-gray-300 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-gray-100 rounded-full h-[300px] w-[300px] mt-52' />
        <div className='absolute border border-gray-125 rounded-full h-[500px] w-[500px] mt-52' />
        <div className='absolute border border-yellow-600 rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse' />
        <div className='absolute border border-gray-100 rounded-full h-[800px] w-[800px] mt-52' />
        <div />
        <div />
        <div />
        <div />
    </motion.div>
  )
}

export default BackgroundCircles