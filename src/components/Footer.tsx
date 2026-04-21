import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-solar-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Logo className="w-12 h-12 bg-white rounded-xl p-1" />
              <span className="text-2xl font-display font-bold">
                Bandi <span className="text-solar-green">Fotovoltaico</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Analizziamo bandi e agevolazioni per permettere ai professionisti del fotovoltaico di offrire il massimo risparmio ai propri clienti. Focus alle regioni e appalti nazionali.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Link Rapidi</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-solar-yellow transition-colors">Home</Link></li>
              <li><Link to="/contatti" className="hover:text-solar-yellow transition-colors">Contatti</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-solar-yellow transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-solar-yellow transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms" className="hover:text-solar-yellow transition-colors">Termini e Condizioni</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {currentYear} Bandi Fotovoltaico. Tutti i diritti riservati. P.IVA 01234567890</p>
        </div>
      </div>
    </footer>
  );
}
