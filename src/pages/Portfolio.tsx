
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioItem } from "@/components/PortfolioItem";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const portfolioItems = [
    {
      title: "Impianto Fotovoltaico Residenziale",
      category: "residenziale",
      description: "Installazione di un impianto fotovoltaico da 6kW su tetto a falda per una villa unifamiliare a Roma. Il sistema include 20 pannelli ad alta efficienza e un sistema di accumulo con batterie al litio da 10kWh, permettendo un'autonomia energetica quasi completa. Il cliente ha ottenuto un risparmio del 90% sui costi energetici e un ritorno dell'investimento previsto in meno di 5 anni.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Ristrutturazione Impianto Elettrico Commerciale",
      category: "commerciale",
      description: "Completa ristrutturazione dell'impianto elettrico di un negozio di 150mq nel centro storico. L'intervento ha incluso la sostituzione del quadro elettrico principale, l'installazione di un sistema di illuminazione a LED ad alta efficienza con controllo centralizzato e sistemi di sicurezza integrati. Il nuovo impianto ha permesso un risparmio energetico del 40% e un miglioramento dell'esperienza d'acquisto.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Impianto Fotovoltaico Industriale",
      category: "industriale",
      description: "Realizzazione di un impianto fotovoltaico da 100kW su capannone industriale in provincia di Milano. L'installazione comprende 250 pannelli solari con ottimizzatori di potenza e sistema di monitoraggio remoto. L'azienda ha ridotto i costi energetici del 60% nonostante l'elevato fabbisogno energetico dei macchinari industriali, con un significativo miglioramento dell'impatto ambientale.",
      image: "https://images.unsplash.com/photo-1623227713577-404c1dae332a?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Impianto Domotico Villa di Lusso",
      category: "residenziale",
      description: "Progettazione e realizzazione di un sistema domotico completo per una villa di 350mq in Toscana. L'impianto integra gestione dell'illuminazione, climatizzazione, sicurezza, sistemi audio/video e controllo degli accessi, tutto gestibile da smartphone e assistenti vocali. La soluzione ha permesso di raggiungere un elevato livello di comfort abitativo e un controllo intelligente dei consumi energetici.",
      image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Ristorante con Illuminazione Intelligente",
      category: "commerciale",
      description: "Sistema di illuminazione intelligente per un ristorante di alta cucina nel centro di Firenze. Il progetto comprende scenari luminosi programmabili, illuminazione d'accento per valorizzare gli spazi, e integrazione con il sistema di prenotazione tavoli. La soluzione ha migliorato significativamente l'atmosfera del locale e l'esperienza dei clienti, contribuendo al successo dell'attività.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Azienda Agricola Autosufficiente",
      category: "industriale",
      description: "Realizzazione di un sistema energetico integrato per un'azienda agricola in Puglia. Il progetto include un impianto fotovoltaico da 50kW, sistema di accumulo e gestione intelligente dell'energia per alimentare i sistemi di irrigazione, refrigerazione e macchinari agricoli. L'azienda ha raggiunto un'autonomia energetica del 95%, migliorando la sostenibilità della produzione.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Hotel con Sistema di Efficienza Energetica",
      category: "commerciale",
      description: "Implementazione di un sistema completo di gestione energetica per un hotel di 40 camere sulla costa adriatica. Il progetto comprende impianto fotovoltaico, sistema di controllo intelligente della climatizzazione per ogni camera, illuminazione LED e automazione degli accessi. La struttura ha ottenuto la certificazione energetica di classe A e una riduzione dei costi operativi del 50%.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Condominio con Impianto Fotovoltaico Condiviso",
      category: "residenziale",
      description: "Installazione di un impianto fotovoltaico condiviso da 30kW per un condominio di 10 appartamenti a Bologna. Il sistema include un sistema di distribuzione dell'energia che consente a ogni unità abitativa di beneficiare dell'energia prodotta, con contabilizzazione individuale dei consumi. Il progetto ha creato una delle prime comunità energetiche in Italia, con significativi benefici economici per tutti i residenti.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Centro Commerciale con Illuminazione LED",
      category: "commerciale",
      description: "Conversione completa dell'illuminazione di un centro commerciale di 10.000mq a tecnologia LED. Il progetto ha incluso la sostituzione di oltre 500 punti luce con apparecchi LED ad alta efficienza e l'installazione di sensori di presenza nelle aree di servizio. L'intervento ha generato un risparmio energetico del 65% e un significativo miglioramento della qualità dell'illuminazione.",
      image: "https://images.unsplash.com/photo-1567449303183-ae0d6ed1c15e?auto=format&fit=crop&w=1200&q=80"
    }
  ];
  
  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-electric-gray">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-electric-black text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567633603492-608b0de9ae49?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">I Nostri <span className="text-electric-yellow">Progetti</span></h1>
              <p className="text-xl text-gray-300">
                Scopri i nostri lavori più significativi nel campo degli impianti elettrici e fotovoltaici. Ogni progetto è personalizzato per soddisfare le esigenze specifiche dei nostri clienti.
              </p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeFilter === "all"
                    ? "bg-electric-yellow text-electric-black"
                    : "bg-white text-electric-black border border-gray-200 hover:bg-electric-yellow/10"
                }`}
              >
                Tutti i Progetti
              </button>
              <button
                onClick={() => setActiveFilter("residenziale")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeFilter === "residenziale"
                    ? "bg-electric-yellow text-electric-black"
                    : "bg-white text-electric-black border border-gray-200 hover:bg-electric-yellow/10"
                }`}
              >
                Residenziale
              </button>
              <button
                onClick={() => setActiveFilter("commerciale")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeFilter === "commerciale"
                    ? "bg-electric-yellow text-electric-black"
                    : "bg-white text-electric-black border border-gray-200 hover:bg-electric-yellow/10"
                }`}
              >
                Commerciale
              </button>
              <button
                onClick={() => setActiveFilter("industriale")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeFilter === "industriale"
                    ? "bg-electric-yellow text-electric-black"
                    : "bg-white text-electric-black border border-gray-200 hover:bg-electric-yellow/10"
                }`}
              >
                Industriale
              </button>
            </div>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <PortfolioItem
                  key={index}
                  title={item.title}
                  category={item.category === "residenziale" ? "Residenziale" : item.category === "commerciale" ? "Commerciale" : "Industriale"}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Nessun progetto trovato per questa categoria.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-electric-yellow">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-electric-black mb-4">Hai in Mente un Progetto Simile?</h2>
            <p className="text-electric-black/80 max-w-2xl mx-auto mb-8">
              I nostri esperti sono pronti ad aiutarti nella realizzazione del tuo progetto elettrico o fotovoltaico. Contattaci per una consulenza personalizzata.
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

export default Portfolio;
