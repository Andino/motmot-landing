"use client"

import { motion } from "framer-motion"
import { BellIcon as Whistle, Trophy, Users, Star, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SportsServices() {
  const services = [
    {
      title: "Partidos Amistosos",
      description:
        "Compite contra equipos locales de alto nivel con arbitraje federado y flexibilidad en la programación.",
      icon: <Whistle className="h-10 w-10 text-green-600" />,
      details:
        "Diferentes tipos de partidos según tus objetivos deportivos. Incluye arbitraje federado y flexibilidad en la programación.",
    },
    {
      title: "Pretemporadas",
      description:
        "Entrena en instalaciones de primer nivel enfocándote en condición física, técnica, táctica y cohesión grupal.",
      icon: <Trophy className="h-10 w-10 text-green-600" />,
      details:
        "Programas diseñados para mejorar la condición física, técnica, táctica y cohesión grupal en entornos profesionales.",
    },
    {
      title: "Campamentos",
      description:
        "Campamentos especializados para jugadores, porteros o mixtos en entornos seguros y de alta calidad.",
      icon: <Users className="h-10 w-10 text-green-600" />,
      details: "Opciones para jugadores de campo, porteros o mixtos, siempre en entornos seguros y de alta calidad.",
    },
    {
      title: "Staff Técnico",
      description:
        "Entrenadores asistentes, preparadores físicos y entrenadores de porteros disponibles para tu equipo.",
      icon: <Star className="h-10 w-10 text-green-600" />,
      details:
        "Complementa tu staff con entrenadores asistentes, preparadores físicos y entrenadores de porteros especializados.",
    },
  ]

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="sports" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Deportivos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Planifica tu gira de pretemporada o juegos amistosos en Costa Rica con nuestros servicios deportivos de alta
            calidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Card className="h-full transition-all duration-300 hover:border-green-400">
                <CardHeader className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 mb-4">{service.description}</CardDescription>
                  <p className="text-sm text-gray-500">{service.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-semibold">Siempre en entornos seguros y de alta calidad</h3>
          </div>
          <p className="text-gray-600">
            Todos nuestros servicios deportivos se realizan en instalaciones de primer nivel, con personal calificado y
            medidas de seguridad adecuadas para garantizar una experiencia óptima.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
