import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export default function HaustuerenSicherheit() {
  return (
    <section className="bg-white min-h-screen py-10">
      <div className="container mx-auto max-w-2xl">
        <nav className="text-sm text-gray-500 py-4 px-2">
          <ol className="list-reset flex">
            <li><Link href="/" className="hover:underline">Home</Link> <span className="mx-2">/</span></li>
            <li><Link href="/informationen" className="hover:underline">Informationen</Link> <span className="mx-2">/</span></li>
            <li className="text-black font-semibold">Sicherheit und Stil: Worauf Sie bei neuen Haustüren achten sollten</li>
          </ol>
        </nav>
        <h1 className="text-3xl text-black font-bold mb-6 text-center">Sicherheit und Stil: Worauf Sie bei neuen Haustüren achten sollten</h1>
        <Image src="/aluplast-eingangstur85mm.png" alt="Sichere Haustür" width={600} height={300} className="mx-auto rounded mb-6" />
        <div className="text-lg text-gray-800 space-y-4">
          <p>Die Haustür ist das Aushängeschild Ihres Hauses und spielt eine zentrale Rolle für Sicherheit und Design. Moderne Haustüren bieten nicht nur einen effektiven Einbruchschutz, sondern überzeugen auch durch vielfältige Gestaltungsmöglichkeiten.</p>
          <p>Achten Sie beim Kauf auf geprüfte Sicherheitstechnik wie Mehrfachverriegelungen, stabile Scharniere und hochwertige Materialien. Aluminium- und Kunststofftüren sind besonders langlebig und pflegeleicht. Wählen Sie ein Design, das zu Ihrem Haus passt und setzen Sie Akzente mit Farben oder Glaselementen.</p>
          <p>Fazit: Eine neue Haustür steigert nicht nur die Sicherheit, sondern auch den Wert und die Optik Ihres Zuhauses. Lassen Sie sich inspirieren und finden Sie die perfekte Tür für Ihren Eingangsbereich!</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="/informationen" className="inline-block bg-stone-950 text-white px-4 py-2 rounded hover:bg-stone-800 transition">Zurück zu Informationen</Link>
        </div>
      </div>
      <ContactSection />
    </section>
  );
} 