'use client'
import { motion } from "framer-motion"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      <div className="bg-[rgb(252,252,252)] text-stone-700 h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Head>
          <title> Cloe's Portfolio</title>
        </Head>

        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/* About */}

        {/* Projects */}

        {/* Contact Me */}
      </div>

  )
}
