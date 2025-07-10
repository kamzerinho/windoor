"use client"

import Herosub from "@/components/Herosub"
import ProductsGrid from "@/components/ProductsGrid"
import ContactSection from "@/components/ContactSection"
import WarumProductSection from "@/components/WarumProductSection"
import {Accordion, AccordionItem} from "@heroui/accordion"

export default function Schiebeturen() {
	const defaultContent = [
		"Schiebetüren im Wohnzimmer bieten den Vorteil, dass sie den Raum optisch erweitern und eine nahtlose Verbindung zu angrenzenden Bereichen schaffen. Besonders Glasschiebetüren lassen viel Licht in den Raum, was die Wohnatmosphäre verbessert. Sie sparen Platz, da sie keinen Schwenkbereich benötigen, und eignen sich ideal als moderner, funktionaler Raumteiler in offenen Wohnkonzepten.",
		"Ja, Glasschiebetüren sind eine elegante und platzsparende Wahl für das Badezimmer. Speziell behandelte Milch- oder Satinverglasungen bieten dabei die nötige Privatsphäre. Zudem sind sie wasserresistent und leicht zu reinigen, was sie für feuchte Räume optimal macht. Schiebetüren mit hochwertigen Beschlägen und Dichtungen gewährleisten auch im Badezimmer jahrelange Haltbarkeit.",
		"Schiebetüren gibt es in verschiedenen Materialien wie Glas, Holz und Aluminium. Glasschiebetüren sind ideal für lichtdurchflutete Räume, während Holz für eine warme, natürliche Optik sorgt. Aluminium bietet maximale Stabilität und Langlebigkeit, was es besonders für häufig genutzte Türen im Wohnzimmer und anderen Hauptbereichen geeignet macht.",
		"Ein Schiebetür-Komplettset enthält alle notwendigen Teile für die Installation, einschließlich Tür, Schiene und Beschläge. Diese Sets erleichtern die Montage und bieten eine sofort einsatzbereite Lösung. Komplettsets sind in verschiedenen Materialien und Designs erhältlich, sodass sie sich an diverse Raumstile – ob für Wohnzimmer, Küche oder Badezimmer – anpassen lassen.",
		"Schiebetüren sind im Allgemeinen wartungsarm. Regelmäßige Reinigung der Schiene und gelegentliches Schmieren der Beschläge sorgen für ein dauerhaft leichtgängiges Gleiten. Insbesondere bei Glasschiebetüren und Aluminium-Modellen reicht eine einfache Reinigung, um sie jahrelang in einwandfreiem Zustand zu halten.",
	]

	return (
		<>
			<Herosub
				title="Schiebetüren"
				subtitle="Entdecken Sie unsere Kollektion von Schiebetüren, die Eleganz und Funktionalität in jeden Raum bringen. Diese Türen eignen sich sowohl für Wohngebäude als auch für öffentliche Gebäude und bieten einen reibungslosen Betrieb, platzsparende Lösungen und stilvolle Designs. Verschönern Sie Ihre Wohnbereiche mit Optionen, die das natürliche Licht maximieren und nahtlose Übergänge ermöglichen."
				backgroundImage="/schiebeturen.jpg"
			/>
			<section>
				<div className="bg-white py-10 text-black">
					<div className="container mx-auto md:px-50 max-sm:px-5">
						<div>
							<p className="text-2xl py-10">
								Schiebetüren – Funktionalität und Eleganz für jeden Raum
							</p>
							<p className="mb-5">
								<b>Schiebetüren</b> sind die perfekte Kombination aus Stil und
								Platzersparnis und bieten eine vielseitige Lösung für moderne
								Innenräume. Mit ihren flexiblen Einsatzmöglichkeiten passen
								Schiebetüren ideal in jeden Raum, ob <b>Wohnzimmer</b>, <b>Küche</b> oder
								<b>Badezimmer</b>. Besonders <b>Glasschiebetüren</b> sind bei Innenräumen
								beliebt, da sie Helligkeit und Transparenz fördern, während sie
								Räume effektiv voneinander abtrennen. Für eine einfache und
								stabile Installation sind spezielle <b>Schiebetürschienen</b> und
								Schiebetürbeschläge essenziell, die für leises und reibungsloses
								Gleiten sorgen.
							</p>
							<p className="mb-5">
								Unsere <b>Schiebetür-Komplettsets</b> bieten alles, was Sie für eine
								schnelle Montage benötigen, und sind in verschiedenen
								Materialien wie Glas oder Metall erhältlich. Schiebetüren sind
								nicht nur praktisch, sondern verleihen jedem Zuhause ein
								modernes, elegantes Ambiente. Egal, ob als Raumteiler oder
								Zugang zu Außenbereichen – Schiebetüren sind eine stilvolle
								Lösung für optimale Raumnutzung und Ästhetik.
							</p>
						</div>

						<h2 className="uppercase text-lg text-center text-black tracking-widest my-15">
							SCHIEBETÜREN BIETEN
						</h2>

						<div className="grid md:grid-cols-3 gap-6">
							<ProductsGrid
								imageSrc="/aliplast-modernslide.png"
								title="ALIPLAST"
								subtitle="Modern Slide"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aliplast-monorail.png"
								title="ALIPLAST"
								subtitle="Monorail"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aliplast-ultraglide.png"
								title="ALIPLAST"
								subtitle="Ultraglide"
								link="#"
							/>
						</div>
						<div className="grid md:grid-cols-3 gap-6">
							<ProductsGrid
								imageSrc="/aliplast-ultraglidethermo.png"
								title="ALIPLAST"
								subtitle="Ultraglide Thermo"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aluplast-hst85mm.png"
								title="ALUPLAST"
								subtitle="HST 85 mm"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aluplast-smartslide.png"
								title="ALUPLAST"
								subtitle="Smart Slide"
								link="#"
							/>
						</div>
					</div>
				</div>
				<div className="py-5">
					<div className="container mx-auto md:px-50 max-sm:px-5">
						<p className="text-2xl py-5">
							Warum Sie sich für Schiebetüren entscheiden sollten
						</p>
						<p className="py-5">
							Schiebetüren bieten eine Reihe von Vorteilen, die sie zu einer
							hervorragenden Wahl für jede Immobilie machen:
						</p>
						<div>
							<WarumProductSection
								imageSrc="/warum-icon.png"
								title="Energieeffizient"
								description="Energieeffiziente Schiebetüren bieten durch hochwertige Isolierung und Dichtungen optimalen Wärmeschutz. Glasschiebetüren mit Dämmglas reduzieren Wärmeverluste, sparen Energiekosten und erhöhen den Wohnkomfort."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-6.png"
								title="Platzsparend"
								description="Schiebetüren maximieren den Raum und sorgen für eine effiziente Raumnutzung in jedem Zuhause. Ob im Wohnzimmer, Badezimmer oder in der Küche – durch das seitliche Öffnen benötigen sie keinen Schwenkbereich wie herkömmliche Türen. Besonders Glasschiebetüren schaffen dabei Transparenz und verbinden Räume optisch, ohne Platz zu beanspruchen."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-2.png"
								title="Personalisierung"
								description="Mit maßgeschneiderten Schiebetüren lässt sich jeder Wohnraum individuell gestalten, sei es das Wohnzimmer, die Küche oder das Badezimmer. Maßanfertigungen ermöglichen die Wahl zwischen verschiedenen Materialien wie Glas, Holz oder Metall und passen sich perfekt an Stil und Raummaße an. Besonders Glasschiebetüren können mit speziellen Gravuren oder getönten Gläsern personalisiert werden, während Holzoptionen natürliche Wärme und Charme verleihen."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-7.png"
								title="Langlebigkeit"
								description="Schiebetüren sind extrem langlebig und robust. Hochwertige Materialien wie Aluminium und gehärtetes Glas sorgen für jahrelange Funktionalität und Widerstandsfähigkeit, selbst bei täglichem Gebrauch in stark frequentierten Räumen."
							/>
						</div>
					</div>
				</div>
				<div className="bg-white py-10 text-black">
					<div className="container mx-auto md:px-50 max-sm:px-5">
						<div>
							<p className="text-2xl py-10">
								Verschiedene Arten von Schiebetüren
							</p>
							<p className="mb-5">
								Es gibt verschiedene Typen von Schiebetüren, die sich in Design,
								Funktion und Materialien unterscheiden. Zu den beliebtesten
								gehören:
							</p>
							<p className="mb-5">
								<b>Glasschiebetüren</b>: Diese Türen sind ideal für Innenräume, da sie
								viel Licht durchlassen und Räume optisch vergrößern.
								Verschiedene Glasausführungen – wie Klarglas, Milchglas oder
								getöntes Glas – bieten individuelle Anpassungsmöglichkeiten und
								Privatsphäre.
							</p>
							<p className="mb-5">
								<b>Holzschiebetüren</b>: Holz verleiht jedem Raum eine warme und
								natürliche Atmosphäre. Diese Türen eignen sich besonders für
								Wohnräume, die ein traditionelles oder rustikales Design
								benötigen. Holzschiebetüren sind zudem robust und dämmen
								Geräusche gut.
							</p>

							<p className="mb-5">
								<b>Aluminium-Schiebetüren</b>: Aluminium ist extrem langlebig und ideal
								für Türen mit hoher Beanspruchung. Diese Türen finden sich
								häufig in modernen Wohnräumen oder als Übergang zum
								Außenbereich. Aluminium-Modelle bieten eine zeitlose Optik und
								sind besonders widerstandsfähig gegen Witterung.
							</p>

							<p className="mb-5">
								<b>Wandschiebetüren</b>: Diese Türen verschwinden komplett in der Wand
								und sind besonders platzsparend. Sie eignen sich für kleine
								Räume wie Badezimmer oder Flure und bieten maximale
								Bewegungsfreiheit.
							</p>
							<p className="mb-5">
								Welche Schiebetür ist die richtige Wahl? Die Entscheidung hängt
								vom Raum und persönlichen Vorlieben ab. Glasschiebetüren passen
								gut zu modernen, lichtdurchfluteten Bereichen wie Wohnzimmern,
								während Holzschiebetüren ideal für eine gemütliche,
								traditionelle Atmosphäre sind. Wer eine extrem langlebige Lösung
								sucht, ist mit Aluminium gut beraten. Wandschiebetüren sind die
								beste Option, wenn Platzsparen im Vordergrund steht.
							</p>
						</div>
						<div>
							<p className="text-2xl my-10">
								Häufige Fragen zu Kunststofffenstern
							</p>
							<Accordion variant="shadow">
								<AccordionItem
									key="1"
									aria-label="Accordion 1"
									title="Welche Vorteile bieten Schiebetüren im Wohnzimmer?"
									className="text-xl my-2">
									{defaultContent[0]}
								</AccordionItem>
								<AccordionItem
									key="2"
									aria-label="Accordion 2"
									title="Sind Glasschiebetüren auch für Badezimmer geeignet?"
									className="text-xl my-2">
									{defaultContent[1]}
								</AccordionItem>
								<AccordionItem
									key="3"
									aria-label="Accordion 3"
									title="Welche Materialien eignen sich für Schiebetüren?"
									className="text-xl my-2">
									{defaultContent[2]}
								</AccordionItem>
								<AccordionItem
									key="4"
									aria-label="Accordion 4"
									title="Was ist ein Schiebetür-Komplettset?"
									className="text-xl my-2">
									{defaultContent[3]}
								</AccordionItem>
								<AccordionItem
									key="5"
									aria-label="Accordion 5"
									title="Wie wartungsintensiv sind Schiebetüren?"
									className="text-xl my-2">
									{defaultContent[4]}
								</AccordionItem>
							</Accordion>
						</div>
						<div>
							<p className="text-2xl py-10">
								Preise für Schiebetüren: Was beeinflusst die Kosten?
							</p>
							<p className="mb-5">
								Der Preis von <b>Schiebetüren</b> hängt von mehreren Faktoren ab, die
								das Material, die Größe, das Design und die Ausstattung
								betreffen. <b>Material</b> spielt eine zentrale Rolle: Glasschiebetüren
								sind oft teurer als Modelle aus Holz oder PVC, insbesondere wenn
								spezielles Sicherheitsglas oder Milchglas verwendet wird.
								<b>Aluminium-Schiebetüren</b> kosten in der Regel mehr, da Aluminium
								langlebig und wetterbeständig ist – ideal für stark
								frequentierte Bereiche oder als Übergang zu Außenbereichen.
							</p>
							<p className="mb-5">
								<b>Größe</b> ist ebenfalls entscheidend: Große Doppelschiebetüren oder
								maßgefertigte Türgrößen erfordern mehr Material und Anpassungen,
								was die Kosten erhöht. Das <b>Design</b> beeinflusst den Preis stark –
								einfache, minimalistische Modelle sind oft günstiger als
								individuell gestaltete Türen mit Gravuren oder speziellen
								Dekorationen.
							</p>
							<p className="mb-5">
								Auch die <b>Ausstattung</b> wie hochwertige Beschläge, Schienen und
								Dichtungen wirken sich auf den Preis aus, da sie für eine leise
								und reibungslose Funktion sowie eine gute Abdichtung sorgen.
								Zusätzliche Optionen wie ein <b>Schiebetür-Komplettset</b> mit
								sämtlichem Zubehör für eine einfache Installation können
								ebenfalls die Gesamtkosten steigern. Schließlich beeinflussen
								auch der Einbau und spezielle Anforderungen an die Montage –
								etwa bei Wandschiebetüren – den Preis.
							</p>
						</div>
					</div>
				</div>
			</section>
			<ContactSection />
		</>
	)
}
