"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/costa-rica-beach.png" 
          alt="Costa Rica landscape"
          fill
          priority
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJpgOUCUnDqAAAAABJRU5ErkJggg=="
          className="object-cover brightness-[0.6]"
        />
      </div>

      {/* Overlay for content */}
      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-white"
        >
          {/* Logo with solid background */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <img 
                src="/images/MotMot3-01.png" 
                alt="Momotus Logo" 
                className="w-72 h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-block bg-green-600 text-white text-sm md:text-base px-4 py-1 rounded-full font-medium mb-2"
            >
              Experiencias educativas y turísticas en Costa Rica
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight leading-tight">
              <span className="block mb-2">Descubre la Biodiversidad</span>
              <span className="block text-green-400">Aprende en la Naturaleza</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white drop-shadow-md max-w-2xl mx-auto leading-relaxed">
              En Momotus diseñamos experiencias transformadoras que combinan <span className="font-semibold underline decoration-green-400 decoration-2 underline-offset-2">educación</span>, <span className="font-semibold underline decoration-green-400 decoration-2 underline-offset-2">turismo sostenible</span> y <span className="font-semibold underline decoration-green-400 decoration-2 underline-offset-2">aventura</span> en los ecosistemas más asombrosos de Costa Rica.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#sports">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white h-12 px-6 text-base w-full sm:w-auto shadow-lg font-medium"
              >
                Explorar programas
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white/20 h-12 px-6 text-base w-full sm:w-auto shadow-lg font-medium"
              >
                Contactar ahora
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
