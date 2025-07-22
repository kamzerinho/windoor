"use client"

import Herosub from "@/components/Herosub"
import ProductsGrid from "@/components/ProductsGrid"
import ContactSection from "@/components/ContactSection"
import WarumProductSection from "@/components/WarumProductSection"
import {Accordion, AccordionItem} from "@heroui/accordion"
import { products } from '@/data/products';

export default function Kunststofffenster() {
	const defaultContent = [
		"Mit minimalem Wartungsaufwand können hochwertige Kunststofffenster bis zu 30 Jahre oder länger halten, ohne ihre Funktionalität oder ihr Aussehen zu verlieren.",
		"Neben Standardverglasungen bieten viele Hersteller Sicherheitsglas, Schallschutz und verschiedene Farbausführungen an, um Ihre Fenster an individuelle Bedürfnisse anzupassen.",
		"Kunststofffenster sind kostengünstiger, pflegeleichter und energieeffizienter als viele Holzfenster. Sie müssen nicht gestrichen werden und sind beständiger gegenüber Feuchtigkeit und UV-Strahlung.",
		"Ja, PVC ist recyclebar und die Energieeffizienz von Kunststofffenstern reduziert den Energieverbrauch, was zu einer geringeren CO₂-Bilanz führt.",
		"Bei WinDoorVision finden Sie Kunststoff-Fenstermodelle von den besten Lieferanten in Europa. Zu niedrigen Preisen können Sie verschiedene Modelle kaufen, die Ihnen lange Zeit dienen werden."
	]

	// Filter products for kunststoffenster (example: by title or id prefix)
	const pvcProducts = products.filter(p => p.category === 'kunststoffenster');

	return (
		<>
			<Herosub
				title="Hochwertige Fenster und Türen"
				subtitle="Entdecken Sie Premium-Fenster und -Türen direkt vom Hersteller, die auf Stil, Langlebigkeit und Energieeffizienz ausgelegt sind. Unser Sortiment ist perfekt für jedes Projekt und bietet hochwertige Lösungen zu wettbewerbsfähigen Preisen. Profitieren Sie von Sonderangeboten und fachkundiger Beratung, um die idealen Produkte für Ihr Haus oder Ihr Unternehmen zu finden."
				backgroundImage="/kunststoffenster.jpg"
			/>
			<section>
				<div className="bg-white py-10 text-black">
					<div className="container mx-auto md:px-50 max-sm:px-5">
						<div>
							<p className="text-2xl py-10">Einführung in Kunststofffenster</p>
							<p className="mb-5">
								<b>Kunststofffenster</b> bieten eine ausgezeichnete Kombination
								aus&nbsp;
								<b>Langlebigkeit</b>, <b>Energieeffizienz</b> und minimalem
								Pflegeaufwand, was sie zur idealen Lösung für moderne Haushalte
								macht. Dank ihrer hervorragenden <b>Dämmeigenschaften</b>&nbsp;
								reduzieren <b>PVC-Fenster</b> den Wärmeverlust, was zu
								geringeren Heizkosten und einem angenehmen Raumklima führt.
							</p>
							<p className="mb-5">
								Diese Fenster bestehen aus robustem Hart-PVC, das
								wetterbeständig und formstabil ist und weder Anstriche noch
								aufwändige Wartung erfordert. Eine einfache Reinigung genügt, um
								die Fenster im Originalzustand zu erhalten. Zudem sind&nbsp;
								<b>Kunststofffenster</b> in zahlreichen Designs und Farben
								erhältlich, sodass sie sich individuell an den Stil Ihres Hauses
								anpassen lassen.
							</p>
							<p className="mb-5">
								Ein weiterer Vorteil liegt in der <b>Sicherheit</b>:&nbsp; 
								<b>Kunststofffenster</b> mit verstärkten Profilen bieten
								erhöhten Schutz und sorgen für ein sicheres Zuhause. Mit ihrer
								hohen Lebensdauer und ihrem erschwinglichen&nbsp;
								<b>Preis-Leistungs-Verhältnis</b> sind <b>PVC-Fenster</b> eine
								kluge Investition für jedes Zuhause.
							</p>
						</div>

						<h2 className="uppercase text-lg text-center text-black tracking-widest my-15">
							KUNSTSTOFFENSTER ANGEBOT
						</h2>

						<div className="grid md:grid-cols-3 gap-6">
							{pvcProducts.map(product => (
								<ProductsGrid
									key={product.id}
									imageSrc={product.image}
									title={product.title}
									subtitle={product.subtitle}
									link={`/angebot/${product.category}/${product.id}`}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="py-5">
					<div className="container mx-auto md:px-50 max-sm:px-5">
						<p className="text-2xl py-5">Warum Kunststofffenster kaufen?</p>
						<p className="py-5">
							Kunststofffenster haben eine Reihe von Vorteilen, die sie zu einer
							guten Wahl für jede Immobilie machen:
						</p>
						<div>
							<WarumProductSection
								imageSrc="/warum-icon.png"
								title="Energieeffizient"
								description="Kunststofffenster sind bekannt für ihre ausgezeichnete Energieeffizienz. Durch Mehrkammerprofile und hochwertige Dichtungen bieten PVC Fenster eine hervorragende Wärmedämmung, die den Wärmeverlust reduziert und Heizkosten senkt. Hausbesitzer profitieren von niedrigeren Energiekosten und einem umweltfreundlicheren Zuhause."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-1.png"
								title="Umweltfreundlich"
								description="PVC Fenster sind eine umweltfreundliche Wahl für jedes Haus. Sie bestehen aus recycelbarem Material und sind sehr langlebig, was die Häufigkeit von Erneuerungen verringert. Durch ihre hervorragende Isolationsleistung helfen Kunststofffenster außerdem, den Energieverbrauch zu senken, was zu einer reduzierten CO₂-Bilanz beiträgt."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-2.png"
								title="Personalisierung"
								description="Mit Kunststofffenstern sind individuelle Gestaltungsmöglichkeiten nahezu unbegrenzt. PVC Fenster sind in verschiedenen Farben, Designs und Verglasungen erhältlich, sodass sie perfekt zum Stil und zu den Anforderungen jedes Hauses passen. Von schallisolierenden Verglasungen bis zu spezifischen Farben – die Optionen bieten volle Flexibilität."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-3.png"
								title="Sicherheit"
								description="Kunststofffenster bieten einen hohen Sicherheitsstandard. Die robusten Rahmen und Stahlverstärkungen sorgen für eine stabile und bruchsichere Konstruktion. Mit zusätzlichen Sicherheitsfunktionen wie abschließbaren Griffen und Spezialverglasungen bieten PVC Fenster optimalen Schutz vor Einbrüchen und sorgen für Sicherheit im Haushalt."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-4.png"
								title="Langlebigkeit"
								description="Kunststofffenster zeichnen sich durch ihre außergewöhnliche Langlebigkeit aus. Dank der robusten Hart-PVC-Profile und einer widerstandsfähigen Konstruktion bleiben diese Fenster auch bei extremen Witterungsbedingungen stabil und formbeständig. Sie sind resistent gegen Feuchtigkeit, UV-Strahlung und Temperaturschwankungen, wodurch sie über Jahrzehnte hinweg zuverlässig funktionieren. Mit minimalem Wartungsaufwand behalten PVC Fenster ihre Qualität und Ästhetik, was sie zur idealen Wahl für langlebige und pflegeleichte Fenster macht."
							/>
						</div>
					</div>
				</div>
				<div className="bg-white py-10 text-black">
					<div className="container mx-auto md:px-50 max-sm:px-5">
						<div>
							<p className="text-2xl py-10">
								Kunststofffenster Preise: Was beeinflusst die Kosten?
							</p>
							<p className="mb-5">
								Die Kosten für <b>Kunststofffenster</b> können je nach verschiedenen
								Faktoren stark variieren. Wer überlegt, <b>Kunststofffenster zu
								kaufen</b>, sollte verstehen, welche Elemente die Preise
								beeinflussen und wie sich die Wahl unterschiedlicher Optionen
								auf die Gesamtinvestition auswirkt. Im Folgenden erfahren Sie,
								welche Faktoren den Preis für <b>Fenster aus Kunststoff</b> bestimmen
								und wie Sie die besten <b>Kunststofffenster</b> für Ihr Budget finden.
							</p>
							<p className="mb-5 font-bold">1. Fenstertyp und -größe</p>
							<p className="mb-5">
								Der Fenstertyp ist einer der wichtigsten Kostenfaktoren.
								Grundlegende Modelle wie Standard-Dreh-Kipp-Fenster sind in der
								Regel günstiger als spezialisierte Designs wie Schiebefenster
								oder Fenster mit besonderem Sicherheitsglas. Auch die
								Fenstergröße spielt eine Rolle: Je größer das Fenster, desto
								höher ist der Preis, da mehr Material benötigt wird und die
								Herstellungskosten steigen. <b>Kunststofffenster</b> für große
								Fensterfronten oder Terrassentüren werden dementsprechend teurer
								ausfallen.
							</p>
							<p className="mb-5 font-bold">
								2. Verglasungsarten und Energieeffizienz
							</p>
							<p className="mb-5">
								Ein weiterer wesentlicher Einfluss auf die <b>Kunststofffenster
								Preise</b> ist die Wahl der Verglasung. Während
								Standard-Doppelverglasungen erschwinglicher sind, bieten
								Dreifachverglasungen eine bessere <b>Wärmedämmung</b> und
								<b>Schalldämmung</b>. Diese Investition kann langfristig helfen,
								Energie- und Heizkosten zu sparen. Energiesparfenster haben
								meist höhere Anschaffungskosten, bieten jedoch auf Dauer
								finanzielle und ökologische Vorteile. Wer sich für
								energieeffiziente <b>Fenster aus Kunststoff</b> entscheidet, profitiert
								von einer langfristigen Kostenersparnis.
							</p>
							<p className="mb-5 font-bold">3. Einbaukosten und Montageart</p>
							<p className="mb-5">
								Auch die Art des Einbaus von <b>Kunststofffenstern</b> wirkt sich auf
								den Preis aus. Manche Hausbesitzer entscheiden sich dafür, die
								Fenster selbst einzubauen, was zwar die Kosten senkt, aber
								Fachwissen und Erfahrung erfordert. Der fachgerechte Einbau
								bietet mehr Sicherheit und wird von Experten empfohlen,
								insbesondere bei größeren oder komplexeren Fenstern. Der
								fachgerechte Einbau durch die Experten von <b>WinDoorVision</b> stellt
								sicher, dass die Fenster optimal abgedichtet und ausgerichtet
								sind, was auf Dauer Energie spart und die Lebensdauer der
								Fenster verlängert.
							</p>
						</div>
						<div>
							<Accordion variant="shadow">
								<AccordionItem
									key="1"
									aria-label="Accordion 1"
									title="Wie lange halten Kunststofffenster?" className="text-xl my-2">
									{defaultContent[0]}
								</AccordionItem>
								<AccordionItem
									key="2"
									aria-label="Accordion 2"
									title="Welche zusätzlichen Funktionen sind bei Kunststofffenstern verfügbar?" className="text-xl my-2">
									{defaultContent[1]}
								</AccordionItem>
								<AccordionItem
									key="3"
									aria-label="Accordion 3"
									title="Welche Vorteile bieten Kunststofffenster im Vergleich zu Holzfenstern?" className="text-xl my-2">
									{defaultContent[2]}
								</AccordionItem>
								<AccordionItem
									key="4"
									aria-label="Accordion 4"
									title="Sind Kunststofffenster umweltfreundlich?" className="text-xl my-2">
									{defaultContent[3]}
								</AccordionItem>
								<AccordionItem
									key="5"
									aria-label="Accordion 5"
									title="Wie kann ich die besten Preise für Kunststofffenster finden?" className="text-xl my-2">
									{defaultContent[4]}
								</AccordionItem>
							</Accordion>
						</div>
						<div>
							<p className="text-2xl py-10">
								Wo kann man Kunststofffenster kaufen?
							</p>
							<p className="mb-5">
								Jetzt ist der perfekte Zeitpunkt, um <b>Kunststofffenster zu kaufen</b>
								und Ihr Zuhause energieeffizient, sicher und stilvoll zu
								gestalten. Unsere <b>Kunststoff Fenster</b> vereinen modernes Design
								mit langer Haltbarkeit und bieten Ihnen beste Qualität zum
								fairen Preis.
							</p>
							<p className="mb-5">
								Wählen Sie aus einer breiten Palette an <b>Kunststofffenstern</b>, die
								speziell auf Ihre Bedürfnisse zugeschnitten sind – ob Standard
								oder individuell angepasst. Vergleichen Sie unsere
								<b>Kunststofffenster Preise</b> und finden Sie die perfekte Lösung für
								Ihr Zuhause.
							</p>
							<p className="mb-5">
								<b>Bestellen Sie Ihre Kunststoff Fenster</b> noch heute und profitieren
								Sie von unseren attraktiven Angeboten und professionellem
								Service!
							</p>
						</div>
					</div>
				</div>
			</section>
			<ContactSection />
		</>
	)
}
