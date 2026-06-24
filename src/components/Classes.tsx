import { motion } from 'motion/react';
import { Wind, Moon, Sun, Flame } from 'lucide-react';

export default function Classes() {
  const classes = [
    {
      title: 'Vinyasa Flow',
      icon: <Wind size={24} className="text-sage-500" />,
      description: 'Ein dynamischer und fließender Stil, der Atem und Bewegung synchronisiert. Ideal, um Kraft aufzubauen, Flexibilität zu fördern und den Geist zu klären.',
      level: 'Alle Level',
      duration: '75 Min'
    },
    {
      title: 'Yin Yoga',
      icon: <Moon size={24} className="text-sage-500" />,
      description: 'Tiefe, langanhaltende Dehnungen, die auf das Bindegewebe und die Faszien wirken. Eine ruhige Praxis zum Loslassen und Entspannen des Nervensystems.',
      level: 'Anfängerfreundlich',
      duration: '90 Min'
    },
    {
      title: 'Hatha Basis',
      icon: <Sun size={24} className="text-sage-500" />,
      description: 'Eine erdende Praxis mit Fokus auf die korrekte Ausrichtung in den grundlegenden Asanas (Haltungen) und bewusste Atemführung.',
      level: 'Anfänger',
      duration: '60 Min'
    },
    {
      title: 'Power Ashtanga',
      icon: <Flame size={24} className="text-sage-500" />,
      description: 'Eine kraftvolle, strukturierte Sequenz für Fortgeschrittene, die körperliche Grenzen erweitern und mentale Stärke aufbauen möchten.',
      level: 'Fortgeschritten',
      duration: '90 Min'
    }
  ];

  return (
    <section id="classes" className="py-24 bg-sage-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-sage-500 uppercase tracking-[0.2em] text-sm font-medium">Unser Angebot</span>
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mt-4">Yoga für jeden Weg</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-cream p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-sage-100"
            >
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-6">
                {c.icon}
              </div>
              <h3 className="text-xl font-serif text-sage-800 mb-3">{c.title}</h3>
              <p className="text-sage-800/70 text-sm font-light leading-relaxed mb-6">
                {c.description}
              </p>
              
              <div className="pt-4 border-t border-sage-100 flex justify-between items-center text-xs text-sage-500 uppercase tracking-wider">
                <span>{c.level}</span>
                <span>{c.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
