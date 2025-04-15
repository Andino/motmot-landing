"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/costarica1/1920/1080')",
          filter: "brightness(0.7)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Conoce. Aprende. Disfruta.</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            En Momotus trabajamos por tus objetivos en uno de los destinos más hermosos del mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#sports">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white h-12 px-6 text-base w-full sm:w-auto"
              >
                Explorar programas
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:text-white hover:bg-white/10 h-12 px-6 text-base w-full sm:w-auto"
              >
                Contactar ahora
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
