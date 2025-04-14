
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lightbulb, Zap, BarChart3, ShieldCheck, Battery, WifiIcon, HomeIcon, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-electric-gray">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-electric-black text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">I Nostri <span className="text-electric-yellow">Servizi</span></h1>
              <p className="text-xl text-gray-300">
                Soluzioni complete e personalizzate per ogni esigenza elettrica e fotovoltaica, dalla progettazione all'installazione e manutenzione.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Services */}
        <section className="py-16 bg-white" id="impianti-elettrici">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-electric-yellow/20 text-electric-black p-2 rounded-lg mb-4">
                  <Lightbulb size={32} />
                </div>
                <h2 className="text-3xl font-bold text-electric-black mb-4">Impianti Elettrici</h2>
                <p className="text-gray-600 mb-4">
                  Progettiamo e realizziamo impianti elettrici sicuri, efficienti e conformi alle normative vigenti, per abitazioni private, negozi, uffici e strutture industriali.
                </p>
                <p className="text-gray-600 mb-6">
                  I nostri servizi includono:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Progettazione e installazione di impianti elettrici residenziali</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Impianti elettrici industriali e commerciali</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Impianti di illuminazione interni ed esterni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Installazione di quadri elettrici</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Adeguamento impianti esistenti alle normative di sicurezza</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
                >
                  Richiedi Preventivo
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80" 
                  alt="Impianti Elettrici" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-electric-gray" id="impianti-fotovoltaici">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80" 
                  alt="Impianti Fotovoltaici" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-electric-yellow/20 text-electric-black p-2 rounded-lg mb-4">
                  <Zap size={32} />
                </div>
                <h2 className="text-3xl font-bold text-electric-black mb-4">Impianti Fotovoltaici</h2>
                <p className="text-gray-600 mb-4">
                  Realizziamo impianti fotovoltaici chiavi in mano, aiutandoti a sfruttare l'energia solare per ridurre i costi energetici e l'impatto ambientale.
                </p>
                <p className="text-gray-600 mb-6">
                  I nostri servizi includono:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Progettazione e dimensionamento dell'impianto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Installazione di pannelli fotovoltaici di alta qualità</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Sistemi di accumulo con batterie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Gestione pratiche per incentivi fiscali e autorizzazioni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Monitoraggio e manutenzione dell'impianto</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
                >
                  Richiedi Preventivo
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white" id="efficienza-energetica">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-electric-yellow/20 text-electric-black p-2 rounded-lg mb-4">
                  <BarChart3 size={32} />
                </div>
                <h2 className="text-3xl font-bold text-electric-black mb-4">Efficienza Energetica</h2>
                <p className="text-gray-600 mb-4">
                  Offriamo soluzioni personalizzate per ottimizzare i consumi energetici di abitazioni e aziende, migliorando il comfort e riducendo i costi in bolletta.
                </p>
                <p className="text-gray-600 mb-6">
                  I nostri servizi includono:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Audit energetici per identificare sprechi e inefficienze</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Installazione di sistemi di domotica e smart home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Illuminazione a LED ad alta efficienza</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Sistemi di gestione intelligente dell'energia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Consulenza per l'ottimizzazione dei consumi</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
                >
                  Richiedi Preventivo
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1592833759747-3a90b14a11df?auto=format&fit=crop&w=800&q=80" 
                  alt="Efficienza Energetica" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-electric-gray" id="manutenzione">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" 
                  alt="Manutenzione" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-electric-yellow/20 text-electric-black p-2 rounded-lg mb-4">
                  <ShieldCheck size={32} />
                </div>
                <h2 className="text-3xl font-bold text-electric-black mb-4">Manutenzione</h2>
                <p className="text-gray-600 mb-4">
                  Forniamo servizi di manutenzione programmata e interventi di riparazione per garantire la sicurezza e l'efficienza dei tuoi impianti elettrici e fotovoltaici.
                </p>
                <p className="text-gray-600 mb-6">
                  I nostri servizi includono:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Controlli periodici di sicurezza degli impianti</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Manutenzione preventiva degli impianti fotovoltaici</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Interventi di riparazione con tempi di risposta rapidi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Assistenza tecnica telefonica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-electric-yellow mr-2">✓</span>
                    <span>Contratti di manutenzione personalizzati</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
                >
                  Richiedi Preventivo
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Applications Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-electric-black mb-4">Settori di Applicazione</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Le nostre soluzioni si adattano a diverse tipologie di clienti e necessità. Ecco i principali settori in cui operiamo:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Residential */}
              <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl border-t-4 border-electric-yellow">
                <div className="bg-electric-yellow/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <HomeIcon className="h-8 w-8 text-electric-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-electric-black">Residenziale</h3>
                <p className="text-gray-600 mb-4">
                  Impianti elettrici e fotovoltaici per abitazioni private, condomini e residenze. Soluzioni per l'efficienza energetica domestica.
                </p>
              </div>
              
              {/* Commercial */}
              <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl border-t-4 border-electric-yellow">
                <div className="bg-electric-yellow/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <WifiIcon className="h-8 w-8 text-electric-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-electric-black">Commerciale</h3>
                <p className="text-gray-600 mb-4">
                  Soluzioni per negozi, uffici, hotel e ristoranti. Impianti elettrici sicuri e sistemi di illuminazione efficienti.
                </p>
              </div>
              
              {/* Industrial */}
              <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl border-t-4 border-electric-yellow">
                <div className="bg-electric-yellow/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-electric-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-electric-black">Industriale</h3>
                <p className="text-gray-600 mb-4">
                  Impianti per stabilimenti produttivi, magazzini e capannoni industriali. Automazione e monitoraggio dei consumi.
                </p>
              </div>
              
              {/* Agricultural */}
              <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-xl border-t-4 border-electric-yellow">
                <div className="bg-electric-yellow/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Battery className="h-8 w-8 text-electric-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-electric-black">Agricolo</h3>
                <p className="text-gray-600 mb-4">
                  Sistemi energetici per aziende agricole, serre e allevamenti. Impianti fotovoltaici su terreni e strutture rurali.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-electric-yellow">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-electric-black mb-4">Hai Bisogno di un Servizio Personalizzato?</h2>
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

export default Services;
