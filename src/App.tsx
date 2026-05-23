import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import MarketDemand from './components/sections/MarketDemand';
import Services from './components/sections/Services';
import Constructor from './components/sections/Constructor';
import Portfolio from './components/sections/Portfolio';
import Process from './components/sections/Process';
import WhyCustom from './components/sections/WhyCustom';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />

      <main>
        <Hero />
        <MarketDemand />
        <Services />
        <Constructor />
        <Portfolio />
        <Process />
        <WhyCustom />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
