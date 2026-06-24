import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop"
          alt="Yoga im Freien"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-sage-800/30 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-cream text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Dein Raum für Balance
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-8 leading-tight"
        >
          Finde deine innere <br className="hidden md:block" />
          <span className="italic text-sage-100">Harmonie</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#schedule"
            className="bg-cream text-sage-800 px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-sage-100 transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            Stundenplan ansehen
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="bg-transparent border border-cream text-cream px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors w-full sm:w-auto justify-center flex"
          >
            Studio entdecken
          </a>
        </motion.div>
      </div>
    </section>
  );
}
