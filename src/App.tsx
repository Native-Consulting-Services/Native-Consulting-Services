import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import CTA from "./components/CTA";
import Pricing from "./components/Pricing";
import LogoCloud from "./components/LogoCloud";
import Contact from "./components/_Contact";

export default function App() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <LogoCloud />
      <CTA />
      <Pricing />
      <Contact />
    </>
  );
}
