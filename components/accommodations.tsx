"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Accommodations() {
  const hotels = [
    {
      name: "DoubleTree by Hilton Hotel Cariari",
      image: "https://www.hilton.com/im/en/SJODTDT/22809918/exterior01-edit.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=267&rw=768&rh=430",
      url: "https://www.hilton.com/en/hotels/sjodtdt-doubletree-cariari-san-jose-costa-rica/",
      description: "Ubicado en San José, ofrece comodidades de lujo y fácil acceso a instalaciones deportivas.",
    },
    {
      name: "Hotel Terraza del Pacífico",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ab/3c/c9/terraza-del-pacifico.jpg?w=900&h=500&s=1",
      url: "https://terrazadelpacifico.com/",
      description: "Frente al mar en Playa Hermosa, ideal para combinar entrenamiento y descanso.",
    },
    {
      name: "Tilajari Hotel Resort",
      image: "https://costarica.org/wp-content/uploads/2017/08/Tilajarislider2.jpg",
      url: "https://tilajari.com",
      description: "Resort junto al río en San Carlos con amplios terrenos e instalaciones deportivas.",
    },
    {
      name: "Condovac la Costa",
      image: "https://images.trvl-media.com/lodging/13000000/12540000/12534600/12534581/986ba3ee.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      url: "https://condovaclacosta.reservadirecto.com",
      description: "Villas frente al mar con impresionantes vistas al Océano Pacífico en Guanacaste.",
    },
    {
      name: "Baldi Hot Springs",
      image: "https://baldihotsprings.cr/wp-content/uploads/2019/09/Slider-18.jpg",
      url: "https://www.baldihotsprings.cr",
      description:
        "Hotel con aguas termales naturales al pie del Volcán Arenal, perfecto para la recuperación muscular.",
    },
  ]

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
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
    <section id="accommodations" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Alojamiento</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabajamos con los mejores hoteles y resorts de Costa Rica para garantizar comodidad y conveniencia durante
            toda tu estadía.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">{hotel.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
