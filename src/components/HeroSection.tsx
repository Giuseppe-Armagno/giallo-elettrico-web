
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-electric-black/80 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Soluzioni <span className="text-electric-yellow">Elettriche</span> e <span className="text-electric-yellow">Fotovoltaiche</span> su Misura
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Esperti nell'installazione di impianti elettrici e fotovoltaici per clienti residenziali e commerciali. Qualità, sicurezza e risparmio energetico garantiti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors text-center sm:text-left"
            >
              Richiedi un Preventivo
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors text-center sm:text-left"
            >
              Scopri i Servizi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
