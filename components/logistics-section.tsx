"use client"

import { motion } from "framer-motion"
import { Plane, Bus, Hotel, Utensils, CalendarDays, Clock } from "lucide-react"

export default function LogisticsSection() {
  const logisticsItems = [
    {
      title: "Llegada",
      description: "Recibimiento en el aeropuerto y traslado a tu alojamiento.",
      icon: <Plane className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Transporte privado",
      description: "Buses y vans privados con conductores experimentados que conocen bien el país.",
      icon: <Bus className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Alojamiento",
      description: "Hoteles y resorts seleccionados por su calidad, ubicación y servicios para deportistas.",
      icon: <Hotel className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Alimentación",
      description:
        "Opciones gastronómicas para todos los requisitos dietéticos, incluyendo planes de nutrición para equipos.",
      icon: <Utensils className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Agenda diaria",
      description:
        "Itinerarios personalizados basados en tus preferencias, equilibrando actividades deportivas y turísticas.",
      icon: <CalendarDays className="h-8 w-8 text-red-500" />,
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="logistics" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Logística y Planificación</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nosotros nos encargamos de todo, vos disfrutás la experiencia.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {logisticsItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm transition-all duration-300"
            >
              <motion.div
                className="bg-gray-50 p-4 rounded-full mb-4"
                whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 bg-green-600 p-8 rounded-lg text-center shadow-lg border-2 border-green-500"
        >
          <div className="flex items-center justify-center gap-3">
            <Clock className="h-8 w-8 text-white" />
            <p className="text-xl md:text-2xl font-bold text-white">
              Nuestro equipo de logística está disponible 24/7 durante toda tu estadía en Costa Rica
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
