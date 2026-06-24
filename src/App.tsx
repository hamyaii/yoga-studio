/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-sage-200 selection:text-sage-800">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
