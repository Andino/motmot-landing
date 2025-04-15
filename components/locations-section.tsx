"use client"

import { motion } from "framer-motion"
import { MapPin, Mountain, Waves, Building, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function LocationsSection() {
  const locations = [
    {
      name: "Solo Playa",
      altitude: "0 msnm",
      icon: <Waves className="h-6 w-6 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1674794223052-24baade99aa1?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Entrena y compite junto al mar en las hermosas playas del Pacífico o Caribe costarricense.",
    },
    {
      name: "Solo Montaña",
      altitude: "2000 msnm",
      icon: <Mountain className="h-6 w-6 text-green-700" />,
      image: "https://images.unsplash.com/photo-1611223156134-07ade11dfe6a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Prepárate en altura con entrenamientos en las zonas montañosas de Costa Rica.",
    },
    {
      name: "Solo Valle Central",
      altitude: "1000 msnm",
      icon: <Building className="h-6 w-6 text-gray-700" />,
      image: "https://images.unsplash.com/photo-1631556210754-3318dcf812ae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Disfruta del clima templado y las excelentes instalaciones deportivas del Valle Central.",
    },
    {
      name: "Combinaciones",
      altitude: "Variada",
      icon: <MapPin className="h-6 w-6 text-red-500" />,
      image: "https://i.blogs.es/871e7b/portada-introvertidos/1366_2000.jpeg",
      description: "Combina 2 o 3 regiones para una experiencia completa (ej. Playa + Valle Central).",
    },
  ]

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ubicaciones Disponibles</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Elige entre diversas ubicaciones según tus objetivos deportivos y preferencias de entorno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48">
                  <div className="relative h-full w-full">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-1">
                        {location.icon}
                        <h3 className="font-bold text-lg">{location.name}</h3>
                      </div>
                      <p className="text-sm text-gray-200">{location.altitude}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600">{location.description}</p>
                  <div className="mt-4 flex items-center text-green-600 font-medium text-sm group cursor-pointer">
                    <span>Ver detalles</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
