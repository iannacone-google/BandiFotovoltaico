import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Contattaci</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hai domande sui nostri servizi o hai bisogno di assistenza personalizzata? Siamo qui per aiutarti
          </p>
        </div>

        <div className="max-w-3xl mx-auto">

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-12 rounded-[40px] shadow-2xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-4">Inviaci un Messaggio</h2>
              <p className="text-gray-600">
                Compila il modulo sottostante e ti risponderemo il prima possibile.
              </p>
            </div>
            <form className="space-y-6">
              {/* Honeypot field */}
              <div className="hidden">
                <label>Non compilare questo campo se sei umano:</label>
                <input type="text" name="b_honeypot" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              <div>
                <label className="block text-sm font-bold mb-2">Messaggio</label>
                <textarea 
                  rows={6}
                  placeholder="Come possiamo aiutarti?"
                  className="w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none resize-none"
                  required
                ></textarea>
              </div>
              <button className="w-full py-5 bg-solar-blue text-white rounded-2xl font-bold text-xl hover:bg-solar-dark transition-all shadow-xl shadow-solar-blue/20 flex items-center justify-center group">
                Invia Messaggio
                <Send className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
