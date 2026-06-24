import { motion } from 'motion/react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-sage-800 text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Lass uns in <br/><span className="italic text-sage-200">Verbindung</span> bleiben.</h2>
            <p className="text-sage-200 font-light mb-12 max-w-md leading-relaxed">
              Hast du Fragen zu den Kursen, möchtest eine Privatstunde buchen oder dich für einen Workshop anmelden? Schreib uns gerne eine Nachricht.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-earth shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Studio Adresse</h4>
                  <p className="text-sage-200 font-light">Lotustraße 108<br/>10115 Berlin, Deutschland</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-earth shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg mb-1">E-Mail</h4>
                  <p className="text-sage-200 font-light">namaste@luminayoga.de</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-earth shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg mb-1">Telefon</h4>
                  <p className="text-sage-200 font-light">+49 123 4567 890</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cream text-sage-800 p-8 md:p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-serif mb-6">Schreib uns</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-2 text-sage-800/80">Dein Name</label>
                <input 
                  type="text" 
                  className="w-full bg-sage-50 border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                  placeholder="Maria Muster"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-sage-800/80">E-Mail Adresse</label>
                <input 
                  type="email" 
                  className="w-full bg-sage-50 border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all"
                  placeholder="maria@beispiel.de"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-sage-800/80">Nachricht</label>
                <textarea 
                  rows={4}
                  className="w-full bg-sage-50 border border-sage-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all resize-none"
                  placeholder="Wie können wir dir helfen?"
                ></textarea>
              </div>

              <button className="w-full bg-sage-800 text-cream py-4 rounded-xl font-medium tracking-wide hover:bg-sage-800/90 transition-colors">
                Nachricht senden
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
