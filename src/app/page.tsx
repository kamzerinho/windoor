import Hero from '@/components/Hero';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesSection from '@/components/ServicesSection';


export default function HomePage() {
  return (
      <>
      <Hero
        title="Ihre Welt mit Qualitätsfenstern und -türen einrahmen"
        subtitle="Fenster und Türen vom Hersteller für Ihr Haus oder ein Büro"
        backgroundImage="/background-image.jpg" 
      />
      <WhyUsSection />
      <ServicesSection />
      </> 
  );
}