"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Download } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En una aplicación real, aquí manejarías el envío del formulario
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Listo para planificar tu experiencia deportiva y turística en Costa Rica? Completa el formulario y nuestro
            equipo se pondrá en contacto contigo en 24 horas.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">¡Gracias!</h3>
                <p className="text-gray-600 text-center">
                  Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="tu.email@ejemplo.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">País</Label>
                    <Input id="country" placeholder="Tu país" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Tipo de experiencia</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de experiencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sports">Solo deportiva</SelectItem>
                        <SelectItem value="tourism">Solo turística</SelectItem>
                        <SelectItem value="academic">Académica</SelectItem>
                        <SelectItem value="combined">Paquete combinado</SelectItem>
                        <SelectItem value="custom">Experiencia personalizada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu grupo y lo que estás buscando..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <Button type="submit" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                    Enviar consulta
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Descargar PDF informativo
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
