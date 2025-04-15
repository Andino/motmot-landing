"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/50688889999", "_blank")
  }

  return (
    <div
      className={`fixed ${isMobile ? "bottom-6 right-6" : "bottom-8 right-8"} z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contactar vía WhatsApp</span>
      </Button>
    </div>
  )
}
