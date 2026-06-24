import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-200 py-12 border-t border-sage-200/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif text-cream mb-2">Lumina Yoga</h2>
            <p className="text-sm font-light text-sage-200/80">Finde deine Mitte. Jeden Tag.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cream transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              <Facebook size={20} />
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-sage-200/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-sage-200/60">
          <p>&copy; {new Date().getFullYear()} Lumina Yoga Studio. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-cream transition-colors">Impressum</a>
            <a href="#" className="hover:text-cream transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-cream transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
