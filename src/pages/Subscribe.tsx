import { motion } from 'motion/react';
import { Send, CheckCircle2, CreditCard } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function Subscribe() {
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState(searchParams.get('plan') || 'mensile');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Abbonati Ora</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compila il modulo con i tuoi dati per attivare l'abbonamento. Se sei un'azienda, inserisci i dati per la fatturazione elettronica.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 rounded-[40px] shadow-2xl"
          >
            <form className="space-y-8">
              {/* Honeypot field */}
              <div className="hidden">
                <label>Non compilare questo campo se sei umano:</label>
                <input type="text" name="b_honeypot" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Plan Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className={`relative flex items-center p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedPlan === 'mensile' ? 'border-solar-blue bg-solar-blue/5' : 'border-gray-100 hover:border-solar-blue/30'}`}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="mensile" 
                    checked={selectedPlan === 'mensile'} 
                    onChange={() => setSelectedPlan('mensile')}
                    className="sr-only" 
                  />
                  <div className="flex-grow">
                    <div className="font-bold text-lg">Piano Mensile</div>
                    <div className="text-solar-blue font-black">€4,99 / mese</div>
                  </div>
                  {selectedPlan === 'mensile' && <CheckCircle2 className="w-6 h-6 text-solar-blue" />}
                </label>
                <label className={`relative flex items-center p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedPlan === 'annuale' ? 'border-solar-blue bg-solar-blue/5' : 'border-gray-100 hover:border-solar-blue/30'}`}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="annuale" 
                    checked={selectedPlan === 'annuale'} 
                    onChange={() => setSelectedPlan('annuale')}
                    className="sr-only" 
                  />
                  <div className="flex-grow">
                    <div className="font-bold text-lg">Piano Annuale</div>
                    <div className="text-solar-blue font-black">€49,90 / anno</div>
                  </div>
                  {selectedPlan === 'annuale' && <CheckCircle2 className="w-6 h-6 text-solar-blue" />}
                </label>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b border-gray-100 pb-2">Dati Aziendali (Opzionali)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Ragione Sociale</label>
                    <input 
                      type="text" 
                      placeholder="Nome Azienda S.r.l. (se applicabile)"
                      className="w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Partita IVA</label>
                    <input 
                      type="text" 
                      placeholder="IT01234567890 (se applicabile)"
                      className="w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Codice SDI o PEC</label>
                    <input 
                      type="text" 
                      placeholder="KRRH6B9 o pec@azienda.it"
                      className="w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Indirizzo di Fatturazione</label>
                    <input 
                      type="text" 
                      placeholder="Via Roma 1, 00100 Roma (RM)"
                      className="w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold border-b border-gray-100 pb-2">Referente</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Il tuo nome"
                      className="w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Cognome</label>
                    <input 
                      type="text" 
                      placeholder="Il tuo cognome"
                      className="w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="la_mia@email.it"
                    className="w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full py-5 bg-solar-blue text-white rounded-2xl font-bold text-xl hover:bg-solar-dark transition-all shadow-xl shadow-solar-blue/20 flex items-center justify-center group">
                  <CreditCard className="mr-3 w-6 h-6" />
                  Procedi all'Attivazione
                  <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-gray-400 text-sm mt-6">
                  Dopo l'invio verrai ricontattato per completare il pagamento tramite bonifico o carta.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
