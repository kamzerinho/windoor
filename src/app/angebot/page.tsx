import Herosub from "@/components/Herosub"
import ContactSection from "@/components/ContactSection"
import ImageLeftTextRight from '@/components/ImageLeft'
import TextLeftImageRight from '@/components/ImageRight'


export default function Angebot() {
	return (
        		<>
			<Herosub
				title="Hochwertige Fenster und Türen"
				subtitle="Entdecken Sie Premium-Fenster und -Türen direkt vom Hersteller, die auf Stil, Langlebigkeit und Energieeffizienz ausgelegt sind. Unser Sortiment ist perfekt für jedes Projekt und bietet hochwertige Lösungen zu wettbewerbsfähigen Preisen. Profitieren Sie von Sonderangeboten und fachkundiger Beratung, um die idealen Produkte für Ihr Haus oder Ihr Unternehmen zu finden."
				backgroundImage="/background-image-angebot.jpg"
			/>

        <section className="bg-white">
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
			<ContactSection />
        </section>
        </>
	)
}
