import { motion } from 'motion/react';

export default function Schedule() {
  const scheduleData = [
    {
      day: 'Montag',
      classes: [
        { time: '08:00 - 09:15', name: 'Morning Vinyasa Flow', instructor: 'Elena' },
        { time: '18:00 - 19:00', name: 'Hatha Basis', instructor: 'Sarah' },
        { time: '19:30 - 21:00', name: 'Yin Yoga', instructor: 'Elena' },
      ]
    },
    {
      day: 'Mittwoch',
      classes: [
        { time: '07:30 - 08:30', name: 'Early Bird Flow', instructor: 'Elena' },
        { time: '17:30 - 19:00', name: 'Power Ashtanga', instructor: 'Markus' },
        { time: '19:30 - 20:45', name: 'Vinyasa Flow', instructor: 'Elena' },
      ]
    },
    {
      day: 'Freitag',
      classes: [
        { time: '09:00 - 10:15', name: 'Hatha Balance', instructor: 'Sarah' },
        { time: '16:00 - 17:30', name: 'Restorative Yoga', instructor: 'Elena' },
        { time: '18:00 - 19:30', name: 'Weekend Welcome Flow', instructor: 'Elena' },
      ]
    },
    {
      day: 'Samstag',
      classes: [
        { time: '10:00 - 11:30', name: 'Masterclass Vinyasa', instructor: 'Elena' },
        { time: '12:00 - 13:00', name: 'Meditation & Pranayama', instructor: 'Elena' },
      ]
    }
  ];

  return (
    <section id="schedule" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">Stundenplan</h2>
          <p className="text-sage-500 font-light max-w-2xl mx-auto">
            Melde dich bequem online an oder komm einfach vorbei. Matten und Hilfsmittel sind im Studio vorhanden.
          </p>
        </div>

        <div className="space-y-12">
          {scheduleData.map((dayPlan, idx) => (
            <motion.div 
              key={dayPlan.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-serif text-earth mb-6 border-b border-sage-200 pb-2">
                {dayPlan.day}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dayPlan.classes.map((c, cIdx) => (
                  <div key={cIdx} className="bg-sage-50 p-6 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-sage-100 transition-colors">
                    <div>
                      <div className="text-sage-500 font-medium text-sm mb-1">{c.time}</div>
                      <div className="text-lg font-serif text-sage-800">{c.name}</div>
                      <div className="text-sage-800/60 text-sm font-light mt-1">mit {c.instructor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
