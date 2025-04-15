"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Palmtree, Mountain, Flame, Coffee, Bird, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function TourismExperience() {
  const destinations = [
    {
      id: "beach",
      name: "Tours de Playa",
      icon: <Palmtree className="h-6 w-6" />,
      description: "Disfruta de las hermosas playas de Costa Rica en el Pacífico y el Caribe.",
      places: [
        "Guanacaste: Playa Hermosa, Tamarindo, Conchal, Sámara",
        "Pacífico Central: Jacó, Puntarenas, Manuel Antonio, Bahía Ballena",
        "Caribe: Cahuita, Manzanillo, Puerto Viejo",
      ],
      images: [
        "https://picsum.photos/seed/beach1/600/400",
        "https://picsum.photos/seed/beach2/600/400",
        "https://picsum.photos/seed/beach3/600/400",
      ],
    },
    {
      id: "mountains",
      name: "Tours de Montaña",
      icon: <Mountain className="h-6 w-6" />,
      description: "Explora los bosques nubosos y paisajes montañosos de Costa Rica.",
      places: ["Monteverde", "Sarapiquí", "San Carlos", "Zurquí", "Carara"],
      images: [
        "https://picsum.photos/seed/mountain1/600/400",
        "https://picsum.photos/seed/mountain2/600/400",
        "https://picsum.photos/seed/mountain3/600/400",
      ],
    },
    {
      id: "volcanoes",
      name: "Tours de Volcanes",
      icon: <Flame className="h-6 w-6" />,
      description: "Visita los impresionantes volcanes de Costa Rica con aguas termales y actividades de aventura.",
      places: ["Poás", "Arenal", "Irazú", "Tenorio", "Rincón de la Vieja", "Miravalles"],
      images: [
        "https://picsum.photos/seed/volcano1/600/400",
        "https://picsum.photos/seed/volcano2/600/400",
        "https://picsum.photos/seed/volcano3/600/400",
      ],
    },
    {
      id: "coffee",
      name: "Tours Culturales",
      icon: <Coffee className="h-6 w-6" />,
      description: "Descubre la cultura costarricense a través de tours de café, museos y sitios históricos.",
      places: [
        "Café: Doka, Café Britt, Alsacia (Starbucks), CATIE",
        "Museos: Nacional, del Oro, de Arte, de Jade",
        "Otros: Teatro Nacional, Artesanía en Sarchí, Iglesias históricas",
      ],
      images: [
        "https://picsum.photos/seed/coffee1/600/400",
        "https://picsum.photos/seed/coffee2/600/400",
        "https://picsum.photos/seed/coffee3/600/400",
      ],
    },
    {
      id: "birds",
      name: "Avistamiento de Aves",
      icon: <Bird className="h-6 w-6" />,
      description: "Costa Rica es un paraíso para los amantes de las aves con más de 900 especies.",
      places: ["Caribe (tierras bajas y piedemonte)", "Pacífico (norte, sur, intermedias y altas)"],
      images: [
        "https://picsum.photos/seed/birds1/600/400",
        "https://picsum.photos/seed/birds2/600/400",
        "https://picsum.photos/seed/birds3/600/400",
      ],
    },
  ]

  // State to track current image index for each destination
  const [currentImageIndex, setCurrentImageIndex] = useState({
    beach: 0,
    mountains: 0,
    volcanoes: 0,
    coffee: 0,
    birds: 0,
  })

  const nextImage = (destinationId) => {
    const destination = destinations.find((d) => d.id === destinationId)
    setCurrentImageIndex((prev) => ({
      ...prev,
      [destinationId]: (prev[destinationId] + 1) % destination.images.length,
    }))
  }

  const prevImage = (destinationId) => {
    const destination = destinations.find((d) => d.id === destinationId)
    setCurrentImageIndex((prev) => ({
      ...prev,
      [destinationId]: (prev[destinationId] - 1 + destination.images.length) % destination.images.length,
    }))
  }

  return (
    <section id="tourism" className="py-16 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiencias Turísticas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complementa tu experiencia deportiva con tours turísticos que te permitirán conocer la belleza natural y
            cultural de Costa Rica.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-sm">
          <Tabs defaultValue="beach" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 rounded-t-lg border-b">
              {destinations.map((destination) => (
                <TabsTrigger
                  key={destination.id}
                  value={destination.id}
                  className="flex items-center justify-center gap-2 py-3 px-2 data-[state=active]:bg-white"
                >
                  <div className="bg-gray-100 p-1.5 rounded-full">{destination.icon}</div>
                  <span className="text-sm hidden md:inline">{destination.name.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="bg-green-50 p-4 rounded-b-lg">
              {destinations.map((destination) => (
                <TabsContent key={destination.id} value={destination.id} className="mt-0 pt-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <div className="rounded-lg overflow-hidden relative">
                      <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full">
                        <motion.div
                          key={currentImageIndex[destination.id]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={destination.images[currentImageIndex[destination.id]] || "/placeholder.svg"}
                            alt={destination.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </motion.div>

                        {/* Image carousel navigation */}
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors duration-200"
                            onClick={() => prevImage(destination.id)}
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors duration-200"
                            onClick={() => nextImage(destination.id)}
                          >
                            <ChevronRight className="h-6 w-6" />
                          </Button>
                        </div>

                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                          {destination.images.map((_, index) => (
                            <motion.div
                              key={index}
                              className={`h-2 w-2 rounded-full cursor-pointer ${currentImageIndex[destination.id] === index ? "bg-white" : "bg-white/50"}`}
                              whileHover={{ scale: 1.2 }}
                              onClick={() => setCurrentImageIndex((prev) => ({ ...prev, [destination.id]: index }))}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="flex flex-col justify-center"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold mb-4">{destination.name}</h3>
                      <p className="text-gray-600 mb-6">{destination.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Destinos Populares:</h4>
                        <ul className="space-y-2">
                          {destination.places.map((place, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            >
                              <span className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{place}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
