import Hero from '@/components/Hero';

export default function HomePage() {
  return (
      <>
      <Hero
        title="Ihre Welt mit Qualitätsfenstern und -türen einrahmen"
        subtitle="Fenster und Türen vom Hersteller für Ihr Haus oder ein Büro"
        backgroundImage="/background-image.jpg" 
      />

      <div className="flex">
        <span>Warum sollten Sie uns wählen?</span>
        <h2></h2>
        <div> <p></p></div>
        <div> <p></p></div>
      </div>
      </> 
  );
}