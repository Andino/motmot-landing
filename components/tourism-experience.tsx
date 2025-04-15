"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Palmtree, Mountain, Flame, Coffee, Bird, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

type Destination = {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  places: string[];
  images: string[];
};

type ImageIndex = {
  beach: number;
  mountains: number;
  volcanoes: number;
  coffee: number;
  birds: number;
};

export default function TourismExperience() {
  const destinations: Destination[] = [
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
        "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "mountains",
      name: "Tours de Montaña",
      icon: <Mountain className="h-6 w-6" />,
      description: "Explora los bosques nubosos y paisajes montañosos de Costa Rica.",
      places: ["Monteverde", "Sarapiquí", "San Carlos", "Zurquí", "Carara"],
      images: [
        "https://landedtravel.com/wp-content/uploads/2018/01/Monteverde-Cloud-Forest-Bridge.jpg",
        "https://www.travelexcellence.com/wp-content/uploads/2019/10/Sarapiqui-Costa-Rica.jpg",
        "https://elmundo.cr/wp-content/uploads/2019/10/San-Carlos-Costa-Rica.jpg",
        "https://www.pinterest.com/pin/156992736987557428/",
        "https://monteverdetourscr.com/wp-content/uploads/2018/01/Carara-National-Park.jpg",
      ],
    },
    {
      id: "volcanoes",
      name: "Tours de Volcanes",
      icon: <Flame className="h-6 w-6" />,
      description: "Visita los impresionantes volcanes de Costa Rica con aguas termales y actividades de aventura.",
      places: ["Poás", "Arenal", "Irazú", "Tenorio", "Rincón de la Vieja", "Miravalles"],
      images: [
        "https://images.unsplash.com/photo-1582514225600-1061c99588b6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1553125333-5f74dbe58ea9?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501747315-124a0eaca060?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "birds",
      name: "Avistamiento de Aves",
      icon: <Bird className="h-6 w-6" />,
      description: "Costa Rica es un paraíso para los amantes de las aves con más de 900 especies.",
      places: ["Caribe (tierras bajas y piedemonte)", "Pacífico (norte, sur, intermedias y altas)"],
      images: [
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1553264701-d138db4fd5d4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState<ImageIndex>({
    beach: 0,
    mountains: 0,
    volcanoes: 0,
    coffee: 0,
    birds: 0,
  })

  const nextImage = (destinationId: keyof ImageIndex) => {
    const destination = destinations.find((d) => d.id === destinationId)
    if (!destination) return
    
    setCurrentImageIndex((prev) => ({
      ...prev,
      [destinationId]: (prev[destinationId] + 1) % destination.images.length,
    }))
  }

  const prevImage = (destinationId: keyof ImageIndex) => {
    const destination = destinations.find((d) => d.id === destinationId)
    if (!destination) return
    
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

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Tabs defaultValue="beach" className="w-full">
            <div className="overflow-x-auto">
              <TabsList className="w-full flex rounded-t-lg border-b min-w-max a p-8">
                {destinations.map((destination) => (
                  <TabsTrigger
                    key={destination.id}
                    value={destination.id}
                    className="flex items-center justify-center gap-3 py-4 px-8 data-[state=active]:bg-white data-[state=active]:shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
                  >
                    <div className="bg-gray-100 p-2 rounded-full flex-shrink-0">{destination.icon}</div>
                    <span className="text-sm font-medium">{destination.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="bg-green-50 p-4 md:p-6 rounded-b-lg">
              {destinations.map((destination) => (
                <TabsContent key={destination.id} value={destination.id} className="mt-0 pt-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <div className="rounded-lg overflow-hidden relative">
                      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full">
                        <motion.div
                          key={currentImageIndex[destination.id as keyof ImageIndex]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={destination.images[currentImageIndex[destination.id as keyof ImageIndex]] || "/placeholder.svg"}
                            alt={destination.name}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={80}
                          />
                        </motion.div>

                        {/* Image carousel navigation */}
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors duration-200"
                            onClick={() => prevImage(destination.id as keyof ImageIndex)}
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors duration-200"
                            onClick={() => nextImage(destination.id as keyof ImageIndex)}
                          >
                            <ChevronRight className="h-6 w-6" />
                          </Button>
                        </div>

                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                          {destination.images.map((_, index) => (
                            <motion.div
                              key={index}
                              className={`h-2 w-2 rounded-full cursor-pointer ${
                                currentImageIndex[destination.id as keyof ImageIndex] === index ? "bg-white" : "bg-white/50"
                              }`}
                              whileHover={{ scale: 1.2 }}
                              onClick={() => setCurrentImageIndex((prev) => ({ ...prev, [destination.id]: index }))}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="flex flex-col justify-center p-4 md:p-0"
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
