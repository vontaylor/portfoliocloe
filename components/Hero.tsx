import React from 'react'
import Image from 'next/image'
import BackgroundCircles from '@/components/BackgroundCircles'

type Props = {}

function Hero({ }: Props) {
    return (

        <div>
            <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
                <BackgroundCircles />
                <div className=' z-10'>
                    <Image
                        className="relative flex justify-center items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] mx-auto overflow-hidden"
                        src="/Untitled-1.png"
                        alt="Next.js Logo"
                        width={150}
                        height={137}
                        priority
                    />
                </div>
                <div className=' z-10'>
                    <h2 className=' text-xs uppercase tracking-[15px] pl-10'>
                        EDITOR | FILMMAKER  
                    </h2>
                </div>
                

            </div>
        </div>
    )
}

export default Hero