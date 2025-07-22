import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export default function EnergiesparenFenster() {
  return (
    <section className="bg-white min-h-screen py-10">
      <div className="container mx-auto max-w-2xl">
        <nav className="text-sm text-gray-500 py-4 px-2">
          <ol className="list-reset flex">
            <li><Link href="/" className="hover:underline">Home</Link> <span className="mx-2">/</span></li>
            <li><Link href="/informationen" className="hover:underline">Informationen</Link> <span className="mx-2">/</span></li>
            <li className="text-black font-semibold">Energie sparen mit modernen Fenstern: Tipps und Vorteile</li>
          </ol>
        </nav>
        <h1 className="text-3xl text-black font-bold mb-6 text-center">Energie sparen mit modernen Fenstern: Tipps und Vorteile</h1>
        <Image src="/aluplast-energeto8000.png" alt="Energiesparende Fenster" width={600} height={300} className="mx-auto rounded mb-6" />
        <div className="text-lg text-gray-800 space-y-4">
          <p>Moderne Fenster sind ein entscheidender Faktor für die Energieeffizienz eines Hauses. Durch innovative Mehrfachverglasungen, hochwertige Dichtungen und wärmegedämmte Rahmen können Sie den Wärmeverlust deutlich reduzieren und so Ihre Heizkosten senken.</p>
          <p>Ein weiterer Vorteil neuer Fenster ist der verbesserte Schallschutz und die erhöhte Sicherheit. Achten Sie beim Kauf auf den U-Wert: Je niedriger dieser Wert, desto besser die Wärmedämmung. Investieren Sie in Fenster mit modernen Rahmenmaterialien wie Kunststoff oder Aluminium, um langfristig Energie zu sparen und den Wohnkomfort zu steigern.</p>
          <p>Fazit: Der Austausch alter Fenster lohnt sich nicht nur für die Umwelt, sondern auch für Ihren Geldbeutel. Lassen Sie sich von unseren Experten beraten und finden Sie die optimale Lösung für Ihr Zuhause!</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="/informationen" className="inline-block bg-stone-950 text-white px-4 py-2 rounded hover:bg-stone-800 transition">Zurück zu Informationen</Link>
        </div>
      </div>
      <ContactSection />
    </section>
  );
} 