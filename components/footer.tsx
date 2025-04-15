import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Momotus - Tours Académicos y Deportivos</h3>
            <p className="text-gray-400 mb-4">
              Creando experiencias deportivas, académicas y turísticas inolvidables en Costa Rica desde 2010.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contáctanos</h3>
            <address className="not-italic text-gray-400">
              <p>San José, Costa Rica</p>
              <p>Email: info@momotus.com</p>
              <p>Teléfono: +506 2222-3333</p>
              <p>WhatsApp: +506 8888-9999</p>
            </address>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#sports" className="text-gray-400 hover:text-white transition-colors">
                Servicios Deportivos
              </Link>
              <Link href="#academic" className="text-gray-400 hover:text-white transition-colors">
                Lecciones Académicas
              </Link>
              <Link href="#tourism" className="text-gray-400 hover:text-white transition-colors">
                Experiencias Turísticas
              </Link>
              <Link href="#accommodations" className="text-gray-400 hover:text-white transition-colors">
                Alojamiento
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Momotus. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
