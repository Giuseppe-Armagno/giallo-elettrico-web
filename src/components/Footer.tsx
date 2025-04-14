
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-electric-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-electric-yellow">Elettro</span>Tecnica
            </h3>
            <p className="text-gray-300 mb-4">
              Soluzioni professionali per impianti elettrici e fotovoltaici. La qualità e l'affidabilità sono la nostra priorità.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-electric-yellow">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-electric-yellow" />
                <span>+39 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-electric-yellow" />
                <a href="mailto:info@elettrotecnica.it" className="hover:text-electric-yellow transition-colors">
                  info@elettrotecnica.it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-electric-yellow" />
                <span>Via Esempio 123, 00100 Roma</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-electric-yellow" />
                <span>Lun-Ven: 8:30-18:00</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-electric-yellow">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-electric-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-electric-yellow transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-electric-yellow transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-electric-yellow transition-colors">
                  Testimonianze
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-electric-yellow transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-electric-yellow">Richiedi Preventivo</h3>
            <p className="text-gray-300 mb-4">
              Sei interessato ai nostri servizi? Contattaci oggi per un preventivo gratuito!
            </p>
            <Link 
              to="/contact" 
              className="bg-electric-yellow text-electric-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
            >
              Contattaci Ora
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} ElettroTecnica. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
