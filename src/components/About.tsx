import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-md">
              <img 
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop" 
                alt="Yoga Lehrerin Elena" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-earth/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
              Namasté, ich bin <span className="italic text-sage-500">Elena</span>
            </h2>
            <div className="space-y-6 text-sage-800/80 leading-relaxed font-light">
              <p>
                Seit über 10 Jahren ist Yoga mein ständiger Begleiter, mein Rückzugsort und meine größte Leidenschaft. In meinem Studio möchte ich einen Raum schaffen, in dem du ankommen, durchatmen und loslassen kannst.
              </p>
              <p>
                Mein Unterrichtsansatz verbindet fließende, dynamische Bewegungen mit tiefen, erdenden Haltungen. Es geht mir nicht um die perfekte Pose, sondern darum, wie du dich dabei fühlst. Jeder Körper ist anders, und so ist auch jede Yoga-Praxis einzigartig.
              </p>
              <p>
                Egal, ob du gerade erst mit Yoga beginnst oder schon lange praktizierst – bei Lumina Yoga bist du herzlich willkommen. Lass uns gemeinsam auf die Matte treten.
              </p>
            </div>
            
            <div className="mt-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                alt="Unterschrift" 
                className="h-12 opacity-40 grayscale"
                style={{ filter: 'brightness(0) sepia(1) hue-rotate(90deg) saturate(0.5)' }} // Simple trick to blend it nicely
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
