import Herosub from "@/components/Herosub"
import ProductsGrid from "@/components/ProductsGrid"
import ContactSection from "@/components/ContactSection"

export default function Kunststofffenster() {
	return (
		<>
			<Herosub
				title="Hochwertige Fenster und Türen"
				subtitle="Entdecken Sie Premium-Fenster und -Türen direkt vom Hersteller, die auf Stil, Langlebigkeit und Energieeffizienz ausgelegt sind. Unser Sortiment ist perfekt für jedes Projekt und bietet hochwertige Lösungen zu wettbewerbsfähigen Preisen. Profitieren Sie von Sonderangeboten und fachkundiger Beratung, um die idealen Produkte für Ihr Haus oder Ihr Unternehmen zu finden."
				backgroundImage="/background-image-angebot.jpg"
			/>
			<section>
                <div className="bg-white py-10 text-black">
				<div className="container mx-auto px-50">
					<div>
						<p className="text-2xl py-10">Einführung in Kunststofffenster</p>
						<p className="mb-5">
							<b>Kunststofffenster</b> bieten eine ausgezeichnete Kombination
							aus
							<b>Langlebigkeit</b>, <b>Energieeffizienz</b> und minimalem
							Pflegeaufwand, was sie zur idealen Lösung für moderne Haushalte
							macht. Dank ihrer hervorragenden <b>Dämmeigenschaften</b>{" "}
							reduzieren <b>PVC-Fenster</b> den Wärmeverlust, was zu geringeren
							Heizkosten und einem angenehmen Raumklima führt.
						</p>
						<p className="mb-5">
							Diese Fenster bestehen aus robustem Hart-PVC, das wetterbeständig
							und formstabil ist und weder Anstriche noch aufwändige Wartung
							erfordert. Eine einfache Reinigung genügt, um die Fenster im
							Originalzustand zu erhalten. Zudem sind <b>Kunststofffenster</b>{" "}
							in zahlreichen Designs und Farben erhältlich, sodass sie sich
							individuell an den Stil Ihres Hauses anpassen lassen.
						</p>
						<p className="mb-5">
							Ein weiterer Vorteil liegt in der <b>Sicherheit</b>:{" "}
							<b>Kunststofffenster</b> mit verstärkten Profilen bieten erhöhten
							Schutz und sorgen für ein sicheres Zuhause. Mit ihrer hohen
							Lebensdauer und ihrem erschwinglichen{" "}
							<b>Preis-Leistungs-Verhältnis</b> sind <b>PVC-Fenster</b> eine
							kluge Investition für jedes Zuhause.
						</p>
					</div>

					<h2 className="uppercase text-lg text-center text-black tracking-widest my-15">
						KUNSTSTOFFENSTER ANGEBOT
					</h2>

					<div className="grid md:grid-cols-3 gap-6">
						<ProductsGrid
							imageSrc="/aluplast-box.png"
							title="ALUPLAST"
							subtitle="Renovation"
							link="#"
						/>
                        <ProductsGrid
							imageSrc="/aluplast-box.png"
							title="ALUPLAST"
							subtitle="Renovation"
							link="#"
						/>
                        <ProductsGrid
							imageSrc="/aluplast-box.png"
							title="ALUPLAST"
							subtitle="Renovation"
							link="#"
						/>
					</div>
                    <div className="grid md:grid-cols-3 gap-6">
						<ProductsGrid
							imageSrc="/aluplast-box.png"
							title="ALUPLAST"
							subtitle="Renovation"
							link="#"
						/>
                        <ProductsGrid
							imageSrc="/aluplast-box.png"
							title="ALUPLAST"
							subtitle="Renovation"
							link="#"
						/>
                        <ProductsGrid
							imageSrc="/aluplast-box.png"
							title="ALUPLAST"
							subtitle="Renovation"
							link="#"
						/>
					</div>
				</div>
                </div>
                <div className="py-5">
                <div className="container mx-auto px-50">
						<p className="text-2xl py-5">Warum Kunststofffenster kaufen?</p>
					<p className="py-5">Kunststofffenster haben eine Reihe von Vorteilen, die sie zu einer guten Wahl für jede Immobilie machen:</p>
					</div>
                </div>
			</section>
            <ContactSection />
		</>
	)
}
