import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeProvider";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-electric-black">
              <span className="text-electric-yellow">Elettro</span>Tecnica
            </span>
          </Link>
        </div>

        <button 
          onClick={toggleMenu} 
          className="md:hidden rounded-md p-2 text-electric-black focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/" 
            className="font-medium text-electric-black hover:text-electric-yellow transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="font-medium text-electric-black hover:text-electric-yellow transition-colors"
          >
            Servizi
          </Link>
          <Link 
            to="/portfolio" 
            className="font-medium text-electric-black hover:text-electric-yellow transition-colors"
          >
            Portfolio
          </Link>
          <Link 
            to="/testimonials" 
            className="font-medium text-electric-black hover:text-electric-yellow transition-colors"
          >
            Testimonianze
          </Link>
          <Link 
            to="/contact" 
            className="font-medium text-electric-black hover:text-electric-yellow transition-colors"
          >
            Contatti
          </Link>
          <ThemeToggle />
        </nav>
      </div>

      <div className={cn(
        "md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-zinc-900 border-b z-40 transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="container py-4 space-y-4">
          <Link 
            to="/" 
            className="block font-medium text-electric-black hover:text-electric-yellow py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="block font-medium text-electric-black hover:text-electric-yellow py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Servizi
          </Link>
          <Link 
            to="/portfolio" 
            className="block font-medium text-electric-black hover:text-electric-yellow py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/testimonials" 
            className="block font-medium text-electric-black hover:text-electric-yellow py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonianze
          </Link>
          <Link 
            to="/contact" 
            className="block font-medium text-electric-black hover:text-electric-yellow py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contatti
          </Link>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
