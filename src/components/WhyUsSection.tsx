// components/WhyUsSection.tsx
import Image from 'next/image';

export default function WhyUsSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-sm text-gray-400 mb-2 tracking-widest">
          WARUM SOLLTEN SIE UNS WÄHLEN?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hohe Qualität</h3>
            <p className="mb-4 text-gray-300">
              Wir arbeiten mit hochwertigen Materialien, präziser Planung und erfahrenen Fachkräften...
            </p>
          </div>
          <div>
            <p className="mb-6 text-gray-300">
              Entdecken Sie unsere Angebote und lassen Sie sich von der Vielfalt überzeugen.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
              Jetzt entdecken
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src="/showroom1.jpg"
            alt="Showroom"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
          />
          <Image
            src="/showroom2.jpg"
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
