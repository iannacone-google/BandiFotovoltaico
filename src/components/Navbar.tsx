import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Logo className="w-12 h-12 group-hover:scale-105 transition-transform duration-300 rounded-xl" />
            <span className="text-xl font-display font-bold text-solar-blue">
              Bandi <span className="text-solar-green">Fotovoltaico</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#servizi" className="text-sm font-medium text-gray-600 hover:text-solar-blue transition-colors">Servizi</Link>
            <Link to="/#come-funziona" className="text-sm font-medium text-gray-600 hover:text-solar-blue transition-colors">Come Funziona</Link>
            <Link to="/#prezzi" className="text-sm font-medium text-gray-600 hover:text-solar-blue transition-colors">Prezzi</Link>
            <Link to="/contatti" className="text-sm font-medium text-gray-600 hover:text-solar-blue transition-colors">Contatti</Link>
            <Link to="/#prezzi" className="px-6 py-2.5 bg-solar-blue text-white rounded-full text-sm font-semibold hover:bg-solar-dark transition-all shadow-lg hover:shadow-solar-blue/20">
              Inizia Ora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4"
        >
          <Link to="/#servizi" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-600">Servizi</Link>
          <Link to="/#come-funziona" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-600">Come Funziona</Link>
          <Link to="/#prezzi" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-600">Prezzi</Link>
          <Link to="/contatti" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-600">Contatti</Link>
          <Link to="/#prezzi" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 bg-solar-blue text-white rounded-xl font-semibold">
            Inizia Ora
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
