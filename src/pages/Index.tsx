import { Lightbulb, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PortfolioItem } from "@/components/PortfolioItem";
import { AnimatedStats } from "@/components/AnimatedStats";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      title: "Impianti Elettrici",
      description: "Progettazione e installazione di impianti elettrici civili e industriali, con soluzioni personalizzate per ogni esigenza.",
      icon: Lightbulb,
      link: "/services#impianti-elettrici"
    },
    {
      title: "Impianti Fotovoltaici",
      description: "Soluzioni per l'energia rinnovabile con pannelli solari di ultima generazione per massimizzare l'efficienza energetica.",
      icon: Zap,
      link: "/services#impianti-fotovoltaici"
    },
    {
      title: "Efficienza Energetica",
      description: "Audit energetici e soluzioni per ridurre i consumi e ottimizzare i costi energetici della tua abitazione o azienda.",
      icon: BarChart3,
      link: "/services#efficienza-energetica"
    },
    {
      title: "Manutenzione",
      description: "Servizi di manutenzione programmata e assistenza tecnica per garantire sicurezza e funzionalità dei tuoi impianti.",
      icon: ShieldCheck,
      link: "/services#manutenzione"
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Privato",
      quote: "Professionisti seri e competenti. Hanno installato il mio impianto fotovoltaico rispettando tempi e budget. Ottimo lavoro!",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Laura Bianchi",
      role: "Titolare Negozio",
      quote: "Ho affidato a loro il rifacimento dell'impianto elettrico del mio negozio. Lavoro impeccabile e massima disponibilità.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Giuseppe Verdi",
      role: "Azienda Agricola",
      quote: "Grazie al loro impianto fotovoltaico la mia azienda agricola ha ridotto i costi energetici del 70%. Consigliati!",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];

  const portfolioItems = [
    {
      title: "Impianto Fotovoltaico Residenziale",
      category: "Residenziale",
      description: "Installazione di un impianto fotovoltaico da 6kW su tetto a falda per una villa unifamiliare, con sistema di accumulo integrato.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Ristrutturazione Impianto Elettrico",
      category: "Commerciale",
      description: "Completa ristrutturazione dell'impianto elettrico di un negozio nel centro storico, con installazione di illuminazione a LED e sistemi di sicurezza.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Impianto Fotovoltaico Industriale",
      category: "Industriale",
      description: "Realizzazione di un impianto fotovoltaico da 100kW su capannone industriale, con sistema di monitoraggio remoto e manutenzione programmata.",
      image: "https://images.unsplash.com/photo-1623227713577-404c1dae332a?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-electric-gray">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-electric-black mb-4">I Nostri Servizi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Offriamo soluzioni complete per impianti elettrici e fotovoltaici, dalla progettazione all'installazione e manutenzione.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                Tutti i Servizi
              </Link>
            </div>
          </div>
        </section>
        
        {/* About Section with Stats */}
        <section className="py-16 bg-electric-black text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Chi Siamo: <span className="text-electric-yellow">Esperti in Soluzioni Elettriche</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Da oltre 15 anni offriamo soluzioni di qualità nel settore degli impianti elettrici e fotovoltaici. La nostra missione è fornire tecnologie all'avanguardia che uniscano efficienza energetica, sostenibilità ambientale e convenienza economica.
                </p>
                <p className="text-gray-300 mb-6">
                  Il nostro team di tecnici qualificati garantisce installazioni a regola d'arte e un servizio di assistenza continuo, per accompagnarti in ogni fase del progetto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors text-center sm:text-left"
                  >
                    Contattaci
                  </Link>
                </div>
              </div>
              
              <AnimatedStats />
            </div>
          </div>
        </section>
        
        {/* Portfolio Section */}
        <section className="py-16 bg-electric-gray">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-electric-black mb-4">I Nostri Progetti</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Scopri alcuni dei nostri lavori più recenti e significativi nel campo degli impianti elettrici e fotovoltaici.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <PortfolioItem
                  key={index}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link
                to="/portfolio"
                className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                Visualizza Portfolio Completo
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-electric-black mb-4">Cosa Dicono i Nostri Clienti</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                La soddisfazione dei nostri clienti è il nostro miglior biglietto da visita. Ecco alcune testimonianze di chi si è affidato a noi.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  quote={testimonial.quote}
                  image={testimonial.image}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link
                to="/testimonials"
                className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                Tutte le Testimonianze
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-electric-yellow">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-electric-black mb-4">Pronti a Realizzare il Tuo Progetto?</h2>
            <p className="text-electric-black/80 max-w-2xl mx-auto mb-8">
              Contattaci oggi stesso per una consulenza gratuita e un preventivo personalizzato. I nostri esperti sono a tua disposizione per trovare la soluzione più adatta alle tue esigenze.
            </p>
            <Link
              to="/contact"
              className="bg-electric-black text-white px-8 py-4 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
            >
              Richiedi un Preventivo Gratuito
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
