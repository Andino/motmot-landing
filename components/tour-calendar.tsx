"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, Utensils, Hotel, Trophy, Coffee, Mountain, ArrowRight, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TourCalendar() {
  const [activeDay, setActiveDay] = useState(1)

  const tourDays = [
    {
      day: 1,
      title: "Llegada",
      activities: [
        { icon: <Plane className="h-5 w-5 text-blue-500" />, text: "Llegada al aeropuerto Juan Santamaría" },
        { icon: <ArrowRight className="h-5 w-5 text-gray-400" />, text: "Transfer privado" },
        { icon: <Hotel className="h-5 w-5 text-purple-500" />, text: "Check-in en el hotel" },
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Cena" },
      ],
      highlight: "Bienvenida a Costa Rica",
    },
    {
      day: 2,
      title: "Primer Partido",
      activities: [
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Desayuno" },
        { icon: <Trophy className="h-5 w-5 text-yellow-500" />, text: "Juego 1" },
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Almuerzo" },
        { icon: <Hotel className="h-5 w-5 text-purple-500" />, text: "Descanso en el hotel" },
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Cena" },
      ],
      highlight: "Primer encuentro deportivo",
    },
    {
      day: 3,
      title: "Segundo Partido",
      activities: [
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Desayuno" },
        { icon: <Trophy className="h-5 w-5 text-yellow-500" />, text: "Juego 2" },
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Almuerzo" },
        { icon: <Hotel className="h-5 w-5 text-purple-500" />, text: "Descanso en el hotel" },
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Cena" },
      ],
      highlight: "Segundo encuentro deportivo",
    },
    {
      day: 4,
      title: "Tour Cultural",
      activities: [
        { icon: <Mountain className="h-5 w-5 text-green-700" />, text: "Tour Volcán Poás" },
        { icon: <Coffee className="h-5 w-5 text-brown-500" />, text: "Doka Coffee Tour" },
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Almuerzo" },
        { icon: <Hotel className="h-5 w-5 text-purple-500" />, text: "Regreso al hotel" },
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Cena" },
      ],
      highlight: "Experiencia cultural y natural",
    },
    {
      day: 5,
      title: "Tercer Partido",
      activities: [
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Desayuno" },
        { icon: <Trophy className="h-5 w-5 text-yellow-500" />, text: "Juego 3 (con árbitros federados)" },
        { icon: <Hotel className="h-5 w-5 text-purple-500" />, text: "Hotel Cariari" },
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Cena" },
      ],
      highlight: "Partido con arbitraje oficial",
    },
    {
      day: 6,
      title: "Cuarto Partido",
      activities: [
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Desayuno" },
        { icon: <Trophy className="h-5 w-5 text-yellow-500" />, text: "Juego 4 (con árbitros federados)" },
        { icon: <Hotel className="h-5 w-5 text-purple-500" />, text: "Hotel Cariari" },
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Cena" },
      ],
      highlight: "Partido final con arbitraje oficial",
    },
    {
      day: 7,
      title: "Regreso",
      activities: [
        { icon: <Utensils className="h-5 w-5 text-orange-500" />, text: "Desayuno" },
        { icon: <Plane className="h-5 w-5 text-blue-500" />, text: "Transfer al aeropuerto" },
      ],
      highlight: "Despedida de Costa Rica",
    },
  ]

  return (
    <section id="calendar" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Calendario Base de Gira</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ejemplo de itinerario deportivo de 7 días. Todos nuestros programas son personalizables según tus
            necesidades.
          </p>
        </motion.div>

        {/* Day selector - Mobile view */}
        <div className="md:hidden mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-600" />
              Selecciona un día:
            </h3>
          </div>
          <div className="flex overflow-x-auto pb-2 gap-2">
            {tourDays.map((day) => (
              <Button
                key={day.day}
                variant={activeDay === day.day ? "default" : "outline"}
                className={`flex-shrink-0 ${
                  activeDay === day.day ? "bg-green-600 hover:bg-green-700" : "border-green-200 text-green-700"
                }`}
                onClick={() => setActiveDay(day.day)}
              >
                Día {day.day}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile view - Selected day */}
        <div className="md:hidden mb-8">
          {tourDays
            .filter((day) => day.day === activeDay)
            .map((day) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-green-200">
                  <div className="bg-green-600 text-white p-4">
                    <h3 className="font-bold text-xl">
                      Día {day.day}: {day.title}
                    </h3>
                    <p className="text-green-100 text-sm mt-1">{day.highlight}</p>
                  </div>
                  <CardContent className="p-4">
                    <ul className="space-y-3">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md">
                          <div className="flex-shrink-0 bg-white p-1.5 rounded-full shadow-sm">{activity.icon}</div>
                          <span className="text-gray-700">{activity.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* Desktop view - Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-green-200"></div>

          <div className="space-y-12">
            {tourDays.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold z-10 shadow-md">
                  {day.day}
                </div>

                <Card
                  className={`w-5/12 ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  } relative border-green-200 hover:shadow-md transition-shadow duration-300`}
                >
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-white border-green-200 ${
                      index % 2 === 0
                        ? "right-0 translate-x-1/2 border-t border-r"
                        : "left-0 -translate-x-1/2 border-b border-l"
                    }`}
                  ></div>
                  <div className="bg-green-50 p-3 border-b border-green-200">
                    <h3 className="font-bold text-xl text-green-800">
                      Día {day.day}: {day.title}
                    </h3>
                    <p className="text-green-700 text-sm">{day.highlight}</p>
                  </div>
                  <CardContent className="p-4">
                    <ul className="space-y-3">
                      {day.activities.map((activity, actIndex) => (
                        <motion.li
                          key={actIndex}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: actIndex * 0.1 }}
                          className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md"
                        >
                          <div className="flex-shrink-0 bg-white p-1.5 rounded-full shadow-sm">{activity.icon}</div>
                          <span className="text-gray-700">{activity.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 bg-white p-6 rounded-lg shadow-md border border-green-100"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-medium mb-2">
                <span className="text-lg">⚠️</span>
                <p>Nota: Boleto aéreo y seguro de viajero no incluidos.</p>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <p className="text-gray-700">
                  Costo estimado: <span className="font-bold text-green-600">$982</span> por persona (calculado sobre
                  base de 20 personas)
                </p>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors">
              Solicitar cotización
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
