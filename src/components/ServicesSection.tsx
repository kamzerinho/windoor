// components/ServicesSection.tsx
const services = [
  { title: 'Kunstofffenster', desc: 'Modernisieren Sie Ihr Zuhause mit hochwertigen PVC-Fenstern - langlebig, energieeffizient und stilvoll. Genießen Sie Komfort und Einsparungen das ganze Jahr über.', link: '#' },
  { title: 'Aluminiumfenster', desc: 'Entdecken Sie elegante, moderne Aluminiumfenster - robust, leicht und energieeffizient. Verschönern Sie Ihr Zuhause mit dauerhafter Eleganz.', link: '#' },
  { title: 'Eingangstüren', desc: 'Sichere und stilvolle Eingangstüren, die auf Langlebigkeit und Attraktivität ausgelegt sind. Werten Sie den ersten Eindruck Ihres Hauses auf.', link: '#' },
  { title: 'Schiebetüren', desc: 'Erleben Sie nahtloses Wohnen mit eleganten Schiebetüren - platzsparend, elegant und einfach zu bedienen. Perfekt für moderne Häuser.', link: '#' },
  { title: 'Aluminium-Konstruktionen', desc: 'Entdecken Sie die vielseitigen Aluminiumkonstruktionen - stabil, leicht und ideal für individuelle Designs. Perfekt für private und gewerbliche Projekte.', link: '#' },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 px-6 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-sm text-center text-black tracking-widest mb-2">
          WAS WIR ANBIETEN
        </h2>
        <p className="text-2xl font-semibold mb-12 text-center">Darin sind wir am besten</p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="border border-gray-200 py-[50px] px-5 rounded-lg hover:shadow-lg transition flex flex-col justify-evenly"
            >
              <h3 className="text-xl font-bold mb-[50px] text-gray-800">{s.title}</h3>
              <p className="text-gray-600 mb-[50px]">{s.desc}</p>
              <a
                href={s.link}
                className=" font-semibold border-b w-[50%] pb-[5px] hover:border-b-[2px] hover:font-bold"
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
