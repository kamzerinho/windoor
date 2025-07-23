import Link from 'next/link';
import Herosub from '@/components/Herosub';
import ContactSection from '@/components/ContactSection';
import Image from 'next/image';

const blogPosts = [
  {
    id: 'energiesparen-fenster',
    title: 'Energie sparen mit modernen Fenstern: Tipps und Vorteile',
    image: '/aluplast-energeto8000.png',
    excerpt:
      'Moderne Fenster bieten nicht nur mehr Komfort und Sicherheit, sondern helfen auch, Heizkosten zu senken. Erfahren Sie, wie innovative Verglasungen und Rahmenmaterialien die Energieeffizienz Ihres Zuhauses steigern können.',
  },
  {
    id: 'haustueren-sicherheit',
    title: 'Sicherheit und Stil: Worauf Sie bei neuen Haustüren achten sollten',
    image: '/aluplast-eingangstur85mm.png',
    excerpt:
      'Die Haustür ist die Visitenkarte Ihres Hauses. Entdecken Sie, wie Sie mit modernen Türsystemen Einbruchschutz, Wärmedämmung und Design optimal kombinieren.',
  },
  {
    id: 'welche-fenster',
    title: 'Welche Fenster soll ich wählen? Aluminium oder PVC?',
    image: '/blog-post-3.jpg',
    excerpt:
      'Aluminium oder PVC? Wir vergleichen die wichtigsten Eigenschaften, Vor- und Nachteile, damit Sie die beste Entscheidung für Ihr Zuhause treffen können.',
  },
];

export default function Informationen() {
  return (
    <>
      <Herosub
        title="Informationen"
        subtitle="Lesen Sie unsere neuesten Artikel, Tipps und Informationen rund um Fenster, Türen und moderne Wohnlösungen. Bleiben Sie informiert mit WinDoorVision."
        backgroundImage="/background-image-angebot.jpg"
      />
      <section className="bg-white min-h-screen py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl text-black text-center font-bold mb-8">Informationen</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center">
                <Image src={post.image} alt={post.title} className="w-full h-64 object-contain bg-white rounded mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-center text-black">{post.title}</h3>
                <p className="text-gray-700 mb-4 text-center">{post.excerpt}</p>
                <Link href={`/informationen/${post.id}`} className="mt-auto inline-block bg-stone-950 text-white px-4 py-2 rounded hover:bg-stone-800 transition">Mehr lesen</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
} 