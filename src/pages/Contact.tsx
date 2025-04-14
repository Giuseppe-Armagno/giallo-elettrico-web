
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-electric-gray">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-electric-black text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-electric-yellow">Contatta</span>ci
              </h1>
              <p className="text-xl text-gray-300">
                Siamo a tua disposizione per qualsiasi informazione o richiesta. Contattaci per un preventivo gratuito o per fissare un appuntamento.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info & Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-electric-black mb-6">Informazioni di Contatto</h2>
                
                <div className="space-y-8 mb-8">
                  <div className="flex items-start">
                    <div className="bg-electric-yellow/20 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-electric-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-electric-black mb-1">Telefono</h3>
                      <p className="text-gray-600">+39 123 456 7890</p>
                      <p className="text-gray-600">+39 098 765 4321 (Assistenza)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-electric-yellow/20 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-electric-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-electric-black mb-1">Email</h3>
                      <p className="text-gray-600">info@elettrotecnica.it</p>
                      <p className="text-gray-600">supporto@elettrotecnica.it</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-electric-yellow/20 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-electric-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-electric-black mb-1">Indirizzo</h3>
                      <p className="text-gray-600">Via Esempio 123</p>
                      <p className="text-gray-600">00100 Roma, Italia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-electric-yellow/20 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-electric-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-electric-black mb-1">Orari di Apertura</h3>
                      <p className="text-gray-600">Lunedì - Venerdì: 8:30 - 18:00</p>
                      <p className="text-gray-600">Sabato: 9:00 - 13:00</p>
                      <p className="text-gray-600">Domenica: Chiuso</p>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="rounded-lg overflow-hidden shadow-md h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12825.591249253013!2d12.4922309!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1613749394468!5m2!1sit!2sit" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    aria-hidden="false" 
                    tabIndex={0}
                    loading="lazy"
                    title="Mappa"
                  ></iframe>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-3xl font-bold text-electric-black mb-6">Inviaci un Messaggio</h2>
                  <p className="text-gray-600 mb-8">
                    Compila il modulo sottostante per contattarci. Ti risponderemo il prima possibile.
                  </p>
                  
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-electric-black mb-4">Domande Frequenti</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ecco alcune risposte alle domande più comuni. Se non trovi quello che cerchi, contattaci direttamente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-electric-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold text-electric-black mb-3">Quanto costa un impianto fotovoltaico?</h3>
                <p className="text-gray-600">
                  Il costo di un impianto fotovoltaico dipende da vari fattori come la potenza, la tipologia dei pannelli e le caratteristiche dell'installazione. Contattaci per un preventivo personalizzato in base alle tue esigenze.
                </p>
              </div>
              
              <div className="bg-electric-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold text-electric-black mb-3">Quali sono gli incentivi disponibili?</h3>
                <p className="text-gray-600">
                  Attualmente sono disponibili diverse agevolazioni fiscali come il Bonus Casa 50%, il Superbonus 110% (per specifici interventi) e la detrazione per risparmio energetico. Ti aiutiamo a identificare gli incentivi più adatti al tuo caso.
                </p>
              </div>
              
              <div className="bg-electric-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold text-electric-black mb-3">Quanto tempo richiede l'installazione?</h3>
                <p className="text-gray-600">
                  I tempi di installazione variano in base alla complessità del progetto. Un impianto fotovoltaico residenziale standard richiede generalmente 2-3 giorni di lavoro, mentre progetti più complessi possono richiedere più tempo.
                </p>
              </div>
              
              <div className="bg-electric-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold text-electric-black mb-3">Offrite servizi di manutenzione?</h3>
                <p className="text-gray-600">
                  Sì, offriamo contratti di manutenzione programmata per garantire l'efficienza e la durata dei tuoi impianti. I servizi includono controlli periodici, pulizia dei pannelli e interventi tempestivi in caso di guasti.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
