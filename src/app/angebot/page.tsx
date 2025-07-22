import Herosub from "@/components/Herosub"
import ContactSection from "@/components/ContactSection"
import ImageLeftTextRight from '@/components/ImageLeft'
import TextLeftImageRight from '@/components/ImageRight'
import Link from 'next/link';


export default function Angebot() {
	return (
		<>
			<Herosub
				title="Hochwertige Fenster und Türen"
				subtitle="Entdecken Sie Premium-Fenster und -Türen direkt vom Hersteller, die auf Stil, Langlebigkeit und Energieeffizienz ausgelegt sind. Unser Sortiment ist perfekt für jedes Projekt und bietet hochwertige Lösungen zu wettbewerbsfähigen Preisen. Profitieren Sie von Sonderangeboten und fachkundiger Beratung, um die idealen Produkte für Ihr Haus oder Ihr Unternehmen zu finden."
				backgroundImage="/background-image-angebot.jpg"
			/>
<div className="bg-white">
			<div className="container mx-auto bg-white">
				<div className="text-black bg-white">
					<ImageLeftTextRight
						imageSrc="/box-angebot.jpg"
						title="Kunststofffenster"
						description="Modernisieren Sie Ihr Zuhause mit hochwertigen Kunststofffenster - langlebig, energieeffizient und stilvoll. Genießen Sie Komfort und Einsparungen das ganze Jahr über."
					/>

					<TextLeftImageRight
						imageSrc="/box-angebot-1.jpg"
						title="Aluminiumfenster"
						description="Entdecken Sie elegante, moderne Aluminiumfenster - stabil, leicht und energieeffizient. Verschönern Sie Ihr Zuhause mit dauerhafter Eleganz."
					/>
					<ImageLeftTextRight
						imageSrc="/box-angebot-2.jpg"
						title="Haustüren"
						description="Sichere und stilvolle Eingangstüren, die auf Langlebigkeit und Attraktivität ausgelegt sind. Werten Sie den ersten Eindruck Ihres Hauses auf."
					/>

					<TextLeftImageRight
						imageSrc="/box-angebot-3.jpg"
						title="Schiebetüren"
						description="Erleben Sie nahtloses Wohnen mit eleganten Schiebetüren - platzsparend, elegant und einfach zu bedienen. Perfekt für moderne Häuser."
					/>
				</div>
			</div>
      </div>
			<ContactSection />

			{/* Blog Feed: Informationen */}
			<section className="bg-white py-10">
				<div className="container mx-auto">
					<h2 className="text-2xl font-bold mb-8">Informationen</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{/* Placeholder blog posts */}
						{[1,2,3].map((id) => (
							<div key={id} className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center">
								<img src="/box-angebot.jpg" alt="Blog Post" className="w-full h-40 object-cover rounded mb-4" />
								<h3 className="text-lg font-semibold mb-2">Blog Post Titel {id}</h3>
								<Link href={`/informationen/${id}`} className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Mehr lesen</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
