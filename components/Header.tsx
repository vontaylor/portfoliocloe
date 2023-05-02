import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between'>
            <motion.div 
            initial={{ opacity: 0, x: -500, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            
            className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon url="https://instagram.com/cloeneto" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://youtube.com/cloeneto" fgColor='gray' bgColor='transparent' />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: -500, scale: 0.0125 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
            
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    url='mailto'
                />
                <p className='uppercase hidden md:inline-flex text-xs text-gray-500 pr-3 tracking-[2px]'> Get In Touch</p>
            </motion.div>

            {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-beige-400 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-beige-800 after:dark:opacity-40 before:lg:h-[360px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/Untitled-1.png"
                    alt="Next.js Logo"
                    width={280}
                    height={137}
                    priority
                />
            </div> */}
        </header>
    )
}

export default Header

/** @jsxImportSource framer-motion/use-client */
