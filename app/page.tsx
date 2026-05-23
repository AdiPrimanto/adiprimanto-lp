import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <PainPoints />
      <Services />
      <Portfolio />
      <Process />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
