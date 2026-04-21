import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BrandCarousel from "@/components/sections/BrandCarousel";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Testimonials from "@/components/sections/Testimonials";
import AIAgents from "@/components/sections/AIAgents";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadCapture from "@/components/sections/LeadCapture";
import Positioning from "@/components/sections/Positioning";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandCarousel />
        <Problem />
        <Solution />
        <Services />
        <Differentials />
        <Testimonials />
        <AIAgents />
        <HowItWorks />
        <LeadCapture />
        <Positioning />
      </main>
      <Footer />
    </>
  );
}
