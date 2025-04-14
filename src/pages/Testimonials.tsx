
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Proprietario di Villa",
      quote: "Ho scelto questa azienda per l'installazione dell'impianto fotovoltaico nella mia villa e sono rimasto estremamente soddisfatto. Professionisti seri e competenti che hanno seguito ogni fase del progetto con massima attenzione. L'impianto funziona perfettamente e sto già vedendo un significativo risparmio in bolletta.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Laura Bianchi",
      role: "Titolare Negozio di Abbigliamento",
      quote: "Ho affidato a loro il rifacimento completo dell'impianto elettrico del mio negozio. Lavoro impeccabile, realizzato nei tempi previsti e con la massima pulizia e professionalità. L'illuminazione studiata ad hoc ha valorizzato l'esposizione dei prodotti, migliorando l'esperienza d'acquisto.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Giuseppe Verdi",
      role: "Azienda Agricola",
      quote: "Grazie all'impianto fotovoltaico installato sui tetti dei nostri capannoni agricoli, la mia azienda ha ridotto i costi energetici del 70%. Il team ha seguito tutte le pratiche burocratiche e incentivi, rendendo l'esperienza semplice e senza stress. Altamente consigliati!",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
      name: "Francesca Neri",
      role: "Amministratore di Condominio",
      quote: "Come amministratore di condominio, ho apprezzato molto la professionalità dimostrata durante l'installazione dell'impianto fotovoltaico condominiale. Ottima gestione dei rapporti con i condomini, lavori eseguiti con precisione e risultati superiori alle aspettative.",
      image: "https://randomuser.me/api/portraits/women/15.jpg"
    },
    {
      name: "Antonio Romano",
      role: "Ristoratore",
      quote: "Il sistema di illuminazione che hanno progettato per il mio ristorante è stato fondamentale per creare l'atmosfera giusta. Apprezzo molto anche la possibilità di controllare tutto tramite app. Un investimento che ha migliorato l'esperienza dei miei clienti.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Claudia Moretti",
      role: "Direttore Hotel",
      quote: "Abbiamo affidato a questa azienda la ristrutturazione completa degli impianti elettrici del nostro hotel e l'installazione di un sistema fotovoltaico. Lavoro eseguito con grande professionalità, rispettando i tempi stringenti tra una stagione e l'altra. I risparmi energetici si sono rivelati anche superiori a quanto previsto.",
      image: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
      name: "Paolo Esposito",
      role: "Proprietario di Appartamento",
      quote: "Ho richiesto l'installazione di un sistema domotico completo per il mio appartamento. Il risultato è eccezionale: controllo luci, climatizzazione e tapparelle dal telefono. Installazione pulita e ordinata, senza interventi murari invasivi. Molto soddisfatto!",
      image: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      name: "Roberta Conti",
      role: "Titolare Studio Medico",
      quote: "Per il mio studio medico avevo bisogno di un impianto elettrico affidabile e sicuro. Il lavoro è stato eseguito durante il weekend per non interferire con l'attività, con grande attenzione ai dettagli e alle normative specifiche per studi medici. Servizio eccellente!",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Stefano Ricci",
      role: "CEO Azienda Manifatturiera",
      quote: "L'impianto fotovoltaico industriale installato sui tetti della nostra azienda ci ha permesso di ridurre drasticamente i costi energetici e di migliorare la nostra impronta ecologica. Professionalità e competenza in ogni fase, dalla progettazione alla realizzazione.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-electric-gray">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-electric-black text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Le <span className="text-electric-yellow">Testimonianze</span> dei Nostri Clienti</h1>
              <p className="text-xl text-gray-300">
                Scopri cosa dicono di noi i clienti che hanno scelto i nostri servizi per i loro progetti elettrici e fotovoltaici.
              </p>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>
        
        {/* Leave a Review Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-electric-black mb-4">La Tua Opinione è Importante</h2>
              <p className="text-gray-600 mb-8">
                Sei un nostro cliente? Condividi la tua esperienza e aiutaci a migliorare i nostri servizi.
              </p>
              <Link
                to="/contact"
                className="bg-electric-yellow text-electric-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                Lascia una Recensione
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-electric-yellow">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-electric-black mb-4">Vuoi Unirti ai Nostri Clienti Soddisfatti?</h2>
            <p className="text-electric-black/80 max-w-2xl mx-auto mb-8">
              Contattaci oggi stesso per scoprire come possiamo aiutarti con il tuo progetto elettrico o fotovoltaico.
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

export default Testimonials;
