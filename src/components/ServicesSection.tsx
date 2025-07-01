// components/ServicesSection.tsx
const services = [
  { title: 'Kunstofffenster', desc: 'Fenster aus hochwertigen Materialien...', link: '#' },
  { title: 'Aluminiumfenster', desc: 'Moderne Fenster aus Aluminium...', link: '#' },
  { title: 'Eingangstüren', desc: 'Individuelle Eingangstüren...', link: '#' },
  { title: 'Schiebetüren', desc: 'Platzsparende Schiebelösungen...', link: '#' },
  { title: 'Aluminium-Konstruktionen', desc: 'Fassaden, Wintergärten und mehr...', link: '#' },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="uppercase text-sm text-gray-600 tracking-widest mb-2">
          WAS WIR ANBIETEN
        </h2>
        <p className="text-2xl font-semibold mb-12">Darin sind wir am besten</p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <a
                href={s.link}
                className="text-blue-600 font-medium hover:underline"
              >
                ANGEBOT PRÜFEN
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
