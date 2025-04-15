"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Leaf, Moon, Droplet, MilkIcon as Cow, Coffee, Bird, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
      image: "https://images.pexels.com/photos/2253844/pexels-photo-2253844.jpeg?auto=compress&cs=tinysrgb&w=800",
      fullDescription: "El Jardín Botánico está conformado por una invaluable colección de material genético que se conserva con fines de investigación y educación, alberga más de 4000 muestras genéticas que representan alrededor de 400 especies de plantas provenientes de diferentes partes del trópico mundial, es un laboratorio en vida donde se observan e interpretan plantas de diferentes partes del mundo, algunas de ellas en peligro de extinción. Durante los recorridos el profesor explica sus usos, propiedades, historia natural y origen, entre otros detalles interesantes. Contamos con una mesa de exhibición, donde el estudiante podrá encontrar, según sea la época de cosecha, una variedad inimaginable de frutos exóticos con formas y colores muy particulares. Tenemos degustación de jugos exóticos para el estudiante que lo quiera. Además, en este mundo tropical el estudiante conocerá plantas de uso medicinal, un jardín de bromelias, un jardín de heliconias, un jardín de aráceas y un módulo demostrativo de agricultura en espacios reducidos.",
      duration: "2 horas aproximadamente",
      recommendations: "Ropa liviana, zapatos cerrados, repelente contra insectos y ropa impermeable, sombrilla o capa para la lluvia."
    },
    {
      number: 2,
      title: "Mundo Tropical Nocturno",
      icon: <Moon className="h-6 w-6 text-indigo-600" />,
      description: "Descubre ranas, insectos y aprende técnicas de fotografía nocturna.",
      image: "https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?auto=format&fit=crop&q=80&w=800",
      fullDescription: "Es una oportunidad única para adentrarse en el mundo nocturno tropical de la vida silvestre de Costa Rica. Justo después de las puestas de sol, será dirigido por un profesor certificado y rápidamente inmerso en una sinfonía de sonidos nocturnos característicos de los residentes de la selva tropical. Esta es una oportunidad de ver de cerca varios tipos de ranas, escarabajos, saltamontes, en ocasiones mamíferos, pájaros, insectos y posiblemente salamandras. Los profesores también son expertos en la seguridad de la iluminación de la vida silvestre, por lo tanto, este recorrido nocturno es una extraordinaria oportunidad de fotografía y video, bajo los cuidados necesarios. Se tendrá contacto con dos de las especies de rana más abundantes son: la famosa rana arbórea de ojos rojos de Costa Rica (Agalychnis callidryas) y la rana de vidrio de Fleischmann (Hyalinobatrachium fleischmanni).",
      duration: "2 horas aproximadamente",
      time: "5:50 p.m.",
      recommendations: "Traer capa o sombrilla, pantalón largo, cámara o celular, zapatos cerrados y cómodos para caminar.",
      includes: "Profesor y linternas"
    },
    {
      number: 3,
      title: "Banco de Germoplasma",
      icon: <Droplet className="h-6 w-6 text-blue-600" />,
      description: "Visita cámaras frías, semillas hortícolas y aprende sobre regeneración.",
      image: "https://images.pexels.com/photos/139312/pexels-photo-139312.jpeg?auto=compress&cs=tinysrgb&w=800",
      fullDescription: "Se inicia la visita con una charla introductoria sobre la historia e importancia de los bancos de germoplasma a nivel mundial para la seguridad alimentaria, el alumno podrá tener contacto con el proceso de conservación de semillas hortícolas almacenadas en cámaras frías a 20°C, seguidamente el estudiante se desplaza al laboratorio donde podrá conocer los equipos y profesional técnico, así como experimentar y aprender sobre los procedimientos utilizados para la regeneración, germinación y conservación de semillas, finalmente se ingresa a la cámara fría donde tendrán una experiencia de observar la forma en que las semillas, una vez empacadas y bajo estrictos sistemas de control, son conservadas para asegurar el alimento del futuro.",
      importance: "En este banco se conservan alrededor de 6300 accesiones de semillas de distintas familias, géneros y variedades que incluyen frijoles, maíz, chile y tomate, entre muchos otros. Colabora con la seguridad alimentaria del planeta y la conservación de especies, especialmente alimenticias.",
      duration: "2 horas aproximadamente",
      recommendations: "Ropa liviana, zapatos cerrados y un suéter para ingresar a la cámara."
    },
    {
      number: 4,
      title: "Ganadería Sostenible",
      icon: <Cow className="h-6 w-6 text-amber-600" />,
      description: "Conoce biodigestores, energía limpia y fincas certificadas.",
      image: "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=800",
      fullDescription: "Es un recorrido por modernas facilidades, donde el estudiante podrá observar el proceso de ordeño y conservación de la leche, mediante la utilización de energía limpia producida a partir de los desechos generados por la misma actividad, además conocerá modelos de manejo silvopastoril, el uso eficiente del agua, sobre el proceso de separación de sólidos (excretas del ganado), generación eléctrica por medio del biodigestor y de producción que han sido diseñados e implementados para hacer de la producción de leche y de la ganadería una actividad económica, social y ambientalmente sostenible. Especial para todos los amantes de la ganadería, desde principiantes interesados en conocer los fundamentos de la ganadería tropical sostenible o aquellos expertos que desean aprender y aplicar las nuevas técnicas con el objetivo de volverse productores sostenibles y más eficientes.",
      importance: "Se muestra la implementación de la investigación que el CATIE desarrolla para hacer de la ganadería una actividad sostenible; el manejo de desechos y modelos silvopastoriles que reducen la producción de gases invernaderos, esta es la primera finca en Costa Rica certificada por Rain Forest Alliance desde el año 2013.",
      duration: "2 horas aproximadamente",
      recommendations: "Ropa liviana, zapatos cerrados, bloqueador solar y ropa impermeable preferiblemente, sombrilla o capa para la lluvia."
    },
    {
      number: 5,
      title: "Colección de Cacao",
      icon: <Coffee className="h-6 w-6 text-yellow-800" />,
      description: "Historia, genética, degustación y elaboración de chocolate.",
      image: "https://images.unsplash.com/photo-1447753072467-2f56032d1d48?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullDescription: "Se inicia con una breve introducción, el estudiante se desplaza hacia el sector de la Finca la Montaña, donde se inicia con un recorrido por la Colección Internacional de Cacao, una de las más importantes a nivel mundial por su riqueza genética. Se hablará sobre los aspectos más relevantes de las especies y variedades que allí se conservan, además de la importancia de las investigaciones que el CATIE realiza en materia de cacao. El estudiante podrá conocer sobre la historia del cacao, su importancia en las culturas precolombinas y las actuales, el programa de mejoramiento genético en cacao y métodos de propagación, además de observar las distintas formas, tamaños y colores de sus frutos, teniendo la oportunidad de degustar la pulpa de diferentes variedades, aprendiendo del proceso de recolección, extracción, fermentación y secado de las semillas para su posterior transformación en chocolate, participando en el proceso de elaboración artesanal de licor de chocolate (materia base para la fabricación de chocolates) y en la degustación de las diferentes preparaciones que se elaboren.",
      importance: "La Colección Internacional de Cacao del CATIE, conserva 1070 introducciones de diferentes partes de América tropical, convirtiéndose en la más importante bajo el dominio público, será una experiencia enriquecedora que permite valorar el trabajo que hay detrás de una barra de chocolate o de una taza de chocolate caliente.",
      duration: "2 horas aproximadamente",
      recommendations: "Ropa liviana, zapatos cerrados, repelente contra insectos, bloqueador solar y ropa impermeable preferiblemente, sombrilla o capa para la lluvia."
    },
    {
      number: 6,
      title: "Colección de Café",
      icon: <Coffee className="h-6 w-6 text-brown-600" />,
      description: "Variedades, propagación y resiliencia climática del café.",
      image: "https://images.pexels.com/photos/942731/pexels-photo-942731.jpeg?auto=compress&cs=tinysrgb&w=800",
      fullDescription: "Se inicia con una breve introducción, el grupo se desplaza hacia el sector de la Colección Internacional de Café, donde se inicia con un recorrido por la finca. Se hablará sobre los aspectos más relevantes de las especies y variedades que allí se conservan, además de la importancia de las investigaciones que CATIE realiza en café. Durante este recorrido guiado se podrá observar la sorprendente cantidad de variedades de café conservados, algunas que pueden alcanzar los 10 metros de altura, y cómo ésta diversidad es importante en los programas de mejoramiento genético para las nuevas variedades ante el cambio climático y climas extremos. Seguidamente se visitan los invernaderos de propagación, donde se podrán observar diferentes trabajos científicos que el CATIE realiza a nivel de campo, dentro de los cuales destacan, la propagación vegetativa de los híbridos F1 tolerantes a enfermedades, enjertación, alta productividad y excelente calidad en taza, y con esto la mejora de esta actividad económica tan importante y que beneficia a muchos productores de zonas rurales.",
      importance: "Esta colección iniciada en el año 1949 es considerada la cuarta colección más grande del mundo, segunda más grande de Latinoamérica, la más diversa en C. arabica y la única a nivel mundial de dominio público.",
      duration: "2 horas aproximadamente",
      recommendations: "Ropa liviana, zapatos cerrados, bloqueador solar, repelente y ropa impermeable, sombrilla o capa para la lluvia."
    },
    {
      number: 7,
      title: "Observación de Aves",
      icon: <Bird className="h-6 w-6 text-red-500" />,
      description: "Charla + caminata, 340 especies, uso de telescopios.",
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=800",
      fullDescription: "La lección inicia con una charla general sobre el comportamiento de las aves, características generales tales como tipo de pico, patas, hábitos de alimentación de acuerdo con cada especie, migraciones altitudinales y aves más representativas de la región, entre otros datos interesantes. Después de la charla se inicia el recorrido, para ello el profesor tendrá a disponibilidad del grupo un telescopio que se utilizará en el momento que se observe un ave en reposo y de esta forma que el estudiante pueda apreciarla. Es importante mencionar que el recorrido es de aproximadamente 2.5 km por lo que se debe de tomar en cuenta las recomendaciones sugeridas, opcionalmente se puede traer cámara fotográfica y binoculares. El campus del CATIE alberga alrededor de 340 especies de aves.",
      duration: "2 horas aproximadamente",
      recommendations: "Ropa liviana, zapatos cerrados, bloqueador solar, ropa impermeable, botella de agua, cámara y binoculares."
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
                      <img
                        src={lesson.image || "/placeholder.svg"}
                        alt={lesson.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 mb-4">{lesson.fullDescription}</p>
                      
                      {lesson.importance && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm text-gray-700 mb-1">Importancia:</h4>
                          <p className="text-sm text-gray-600">{lesson.importance}</p>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-1">Duración:</h4>
                          <p className="text-sm text-gray-600">{lesson.duration}</p>
                        </div>
                        
                        {lesson.time && (
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-1">Hora de inicio:</h4>
                            <p className="text-sm text-gray-600">{lesson.time}</p>
                          </div>
                        )}
                        
                        {lesson.includes && (
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-1">Incluye:</h4>
                            <p className="text-sm text-gray-600">{lesson.includes}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold text-sm text-gray-700 mb-1">Recomendaciones:</h4>
                        <p className="text-sm text-gray-600">{lesson.recommendations}</p>
                      </div>
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
