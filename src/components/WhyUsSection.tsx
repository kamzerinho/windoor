// components/WhyUsSection.tsx
import Image from 'next/image';

export default function WhyUsSection() {
  return (
    <section className="bg-stone-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-sm text-gray-400 mb-2 tracking-widest">
          WARUM SOLLTEN SIE UNS WÄHLEN?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hohe Qualität</h3>
            <p className="mb-4 text-gray-300">
Unser Angebot umfasst energieeffiziente Fenster, Haustüren und Schiebetüren aus Aluminium und PVC. Wenn Sie sich für uns entscheiden, wählen Sie die besten Hersteller von Fenstern und Türen in Europa. Unsere Produkte garantieren eine hohe Qualität und folgen den besten Trends in der Welt der Fenster- und Türenproduktion. Außerdem helfen wir Ihnen bei der Auswahl der besten Option für Ihren speziellen Fall, und unser professionelles Team wird die ausgewählten Produkte für Sie installieren.            </p>
          </div>
          <div>
            <p className="mb-6 text-gray-300">
Erkunden Sie unser Angebot und sehen Sie sich die Vielfalt der von uns angebotenen Fenster- und Türdesigns an. Mit einer großen Auswahl an Stilen und Farben können Sie ganz einfach die perfekte Lösung für den einzigartigen Stil und die Bedürfnisse Ihres Hauses finden.

            </p>
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
              Jetzt entdecken
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src="/box-1.jpg"
            alt="Showroom"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
          />
          <Image
            src="/box-2.jpg"
            alt="Design"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
