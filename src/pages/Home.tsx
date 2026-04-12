import { motion } from 'motion/react';
import { 
  Zap, 
  FileText, 
  Search, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Globe,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Analisi Regionali",
    description: "Monitoraggio capillare di ogni bando regionale"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Appalti Nazionali",
    description: "Appalti pubblici italiani filtrati per rilevanza energetica"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Agevolazioni Fiscali",
    description: "Aggiornamenti costanti su detrazioni, crediti d'imposta e incentivi GSE"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Dati Verificati",
    description: "Ogni informazione è verificata prima della pubblicazione"
  }
];

const steps = [
  {
    number: "01",
    title: "Raccolta Dati",
    description: "Aggreghiamo dati da fonti ufficiali, PDF tecnici e portali istituzionali"
  },
  {
    number: "02",
    title: "Analisi Esperta",
    description: "Filtriamo le opportunità più concrete per il fotovoltaico"
  },
  {
    number: "03",
    title: "Newsletter Mensile",
    description: "Ricevi un report pulito, chiaro e ordinato pronto all'uso per i tuoi preventivi"
  }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-solar-yellow/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-solar-green/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-black mb-8 leading-tight">
              L'Energia dei Bandi <br />
              <span className="gradient-text">Nelle Tue Mani</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Analisi professionale di bandi e agevolazioni per il fotovoltaico e appalti regionali e nazionali. Trasforma la burocrazia in opportunità di vendita
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#prezzi" 
                className="w-full sm:w-auto px-8 py-4 bg-solar-blue text-white rounded-2xl font-bold text-lg hover:bg-solar-dark transition-all shadow-xl shadow-solar-blue/20 flex items-center justify-center group"
              >
                Abbonati alla Newsletter
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servizi" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-solar-blue border-2 border-solar-blue/10 rounded-2xl font-bold text-lg hover:bg-solar-light transition-all text-center"
              >
                Scopri il Servizio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="servizi" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Cosa Offriamo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un servizio completo per il tuo business, progettato per chi vive di fotovoltaico
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="w-12 h-12 bg-solar-green/10 text-solar-green rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="come-funziona" className="py-24 lg:py-32 bg-solar-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-solar-blue/10 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">Il Nostro Metodo</h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Non ci limitiamo a copiare i bandi. Li studiamo, li verifichiamo e li integriamo con ricerche web aggiornate per darti un vantaggio competitivo reale
              </p>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-6"
                  >
                    <div className="text-4xl font-black text-solar-green/30">{step.number}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-solar-blue/20 p-8 rounded-[40px] border border-white/10">
                <div className="bg-white rounded-3xl p-8 text-solar-dark shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Report Anteprima</div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-4 bg-gray-100 rounded-full w-3/4" />
                    <div className="h-4 bg-gray-100 rounded-full w-full" />
                    <div className="h-4 bg-gray-100 rounded-full w-5/6" />
                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-10 h-10 bg-solar-yellow rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-solar-dark" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Bando Regionale 2026</div>
                          <div className="text-xs text-solar-green font-bold">Attivo - €2.5M</div>
                        </div>
                      </div>
                      <div className="h-20 bg-solar-light rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prezzi" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Piani di Abbonamento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prezzo di lancio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mensile */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">Mensile</h3>
              <div className="text-5xl font-black mb-8">€4,99<span className="text-lg text-gray-400 font-medium">/mese</span></div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-solar-green" />
                  <span className="text-gray-600">Disdici quando vuoi</span>
                </li>
              </ul>
              <Link 
                to="/abbonati?plan=mensile"
                className="w-full py-4 border-2 border-solar-blue text-solar-blue font-bold rounded-2xl hover:bg-solar-blue hover:text-white transition-all block text-center"
              >
                Abbonati Ora
              </Link>
            </motion.div>

            {/* Annuale */}
            <motion.div 
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-solar-blue p-10 rounded-[40px] text-white shadow-2xl shadow-solar-blue/30 relative z-10"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-solar-yellow text-solar-dark px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest">
                Consigliato
              </div>
              <h3 className="text-2xl font-bold mb-4">Annuale</h3>
              <div className="text-sm text-white/66 line-through">€59,88</div>
              <div className="text-5xl font-black mb-2">€49,90<span className="text-lg text-white/60 font-medium">/anno</span></div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-solar-yellow" />
                  <span>2 Mesi Gratis</span>
                </li>
              </ul>
              <Link 
                to="/abbonati?plan=annuale"
                className="w-full py-4 bg-white text-solar-blue font-bold rounded-2xl hover:bg-solar-yellow hover:text-solar-dark transition-all block text-center"
              >
                Abbonati Ora
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-solar-blue rounded-[50px] p-12 lg:p-20 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <Zap className="w-16 h-16 mx-auto mb-8 text-solar-yellow opacity-80" />
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">Pronto a Trasformare il Tuo Business?</h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Unisciti ai professionisti che hanno già scelto la nostra analisi tecnica per vincere più appalti e offrire il massimo risparmio
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#prezzi" 
                  className="w-full sm:w-auto px-10 py-5 bg-solar-yellow text-solar-dark rounded-2xl font-black text-lg hover:bg-white transition-all shadow-xl shadow-solar-yellow/20"
                >
                  Scegli il Tuo Piano
                </a>
                <Link 
                  to="/contatti" 
                  className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Parla con un Esperto
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
