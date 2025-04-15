"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Leaf, Moon, Droplet, MilkIcon as Cow, Coffee, Bird, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AcademicLessons() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const lessons = [
    {
      number: 1,
      title: "Jardín Botánico",
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      description: "Explora plantas medicinales, frutas, jugos y aprende sobre agricultura urbana.",
      image: "https://picsum.photos/seed/botanical123/600/400",
    },
    {
      number: 2,
      title: "Mundo Tropical Nocturno",
      icon: <Moon className="h-6 w-6 text-indigo-600" />,
      description: "Descubre ranas, insectos y aprende técnicas de fotografía nocturna.",
      image: "https://picsum.photos/seed/night123/600/400",
    },
    {
      number: 3,
      title: "Banco de Germoplasma",
      icon: <Droplet className="h-6 w-6 text-blue-600" />,
      description: "Visita cámaras frías, semillas hortícolas y aprende sobre regeneración.",
      image: "https://picsum.photos/seed/seeds123/600/400",
    },
    {
      number: 4,
      title: "Ganadería Sostenible",
      icon: <Cow className="h-6 w-6 text-amber-600" />,
      description: "Conoce biodigestores, energía limpia y fincas certificadas.",
      image: "https://picsum.photos/seed/farm123/600/400",
    },
    {
      number: 5,
      title: "Colección de Cacao",
      icon: <Coffee className="h-6 w-6 text-yellow-800" />,
      description: "Historia, genética, degustación y elaboración de chocolate.",
      image: "https://picsum.photos/seed/cacao123/600/400",
    },
    {
      number: 6,
      title: "Colección de Café",
      icon: <Coffee className="h-6 w-6 text-brown-600" />,
      description: "Variedades, propagación y resiliencia climática del café.",
      image: "https://picsum.photos/seed/coffee123/600/400",
    },
    {
      number: 7,
      title: "Observación de Aves",
      icon: <Bird className="h-6 w-6 text-red-500" />,
      description: "Charla + caminata, 340 especies, uso de telescopios.",
      image: "https://picsum.photos/seed/birds123/600/400",
    },
  ]

  return (
    <section id="academic" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seeds & Sustainability: Lecciones Académicas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complementa tu experiencia deportiva con lecciones académicas sobre sostenibilidad y biodiversidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="cursor-pointer" onClick={() => toggleAccordion(index)}>
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full">{lesson.icon}</div>
                      <h3 className="font-semibold text-lg">
                        <span className="text-green-600 font-bold">{lesson.number}. </span>
                        {lesson.title}
                      </h3>
                    </div>
                    {openAccordion === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: openAccordion === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={lesson.image || "/placeholder.svg"}
                        alt={lesson.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600">{lesson.description}</p>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
