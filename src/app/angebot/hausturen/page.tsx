"use client"

import Herosub from "@/components/Herosub"
import ProductsGrid from "@/components/ProductsGrid"
import ContactSection from "@/components/ContactSection"
import {Accordion, AccordionItem} from "@heroui/accordion"

export default function Hausturen() {
	const defaultContent = [
		"Die gängigsten Materialien für Hauseingangstüren sind PVC, Aluminium und Holz. PVC-Türen sind kostengünstig und pflegeleicht, Aluminiumtüren bieten hohe Stabilität und Sicherheit, während Holztüren durch ihre natürliche Optik und hervorragende Dämmwerte überzeugen. Die Wahl des Materials hängt von persönlichen Präferenzen, Budget und Anforderungen an Sicherheit und Langlebigkeit ab.",
		"Ja, Aluminium-Haustüren gelten aufgrund ihrer hohen Stabilität und Widerstandsfähigkeit als besonders sicher. Sie bieten ausgezeichneten Einbruchschutz und sind robust gegenüber Witterungseinflüssen. Für zusätzliche Sicherheit können sie mit speziellen Schließsystemen oder Sicherheitsschichten ausgestattet werden.",
		"Holztüren benötigen etwas mehr Pflege, da sie anfällig für Feuchtigkeit und Sonneneinstrahlung sind. Regelmäßiges Lackieren oder Ölen schützt das Holz vor Verziehen und Abnutzung. Zudem hilft eine gute Imprägnierung, die Lebensdauer der Tür zu verlängern und sie wetterfest zu halten.",
		"Holz- und PVC-Haustüren bieten generell bessere Wärmedämmungseigenschaften als Aluminium. Aluminiumtüren lassen sich jedoch oft mit zusätzlichen Isolierschichten versehen, um ihre Dämmleistung zu verbessern. Für maximale Energieeffizienz sind Türen mit mehrfacher Verglasung und hochwertigen Dichtungen empfehlenswert.",
		"Die Lebensdauer einer Haustür hängt vom Material und der Pflege ab. PVC-Türen halten bei guter Pflege etwa 20 bis 30 Jahre, Aluminiumtüren können 40 Jahre oder länger halten, und Holztüren erreichen bei regelmäßiger Wartung ebenfalls eine lange Lebensdauer.",
	]

	return (
		<>
			<Herosub
				title="Haustüren – der Schlüssel zu Sicherheit und Stil Ihrer Wohnung"
				subtitle="Haustüren sind ein unverzichtbares Attribut eines jeden Hauses. Sie vereinen Sicherheit und Stil und hinterlassen einen bleibenden Eindruck. Es wird oft unterschätzt, dass eine gut gewählte Haustür sowohl Schutz als auch Ästhetik bietet und den Gesamtwert Ihres Hauses erhöht. Mit einer Vielzahl von Materialien und Designs können diese Türen an jeden Stil angepasst werden."
				backgroundImage="/hausturen.jpg"
			/>
			<section>
				<div className="bg-white py-10 text-black">
					<div className="container mx-auto px-50">
						<div>
							<p className="text-2xl py-10">
								Hochwertige Hauseingangstüren – Stil und Sicherheit für Ihr
								Zuhause
							</p>
							<p className="mb-5">
								Eine passende <b>Hauseingangstür</b> ist der erste Schritt zu einem
								einladenden und sicheren Zuhause. Unsere Türen bieten die
								perfekte Kombination aus modernem Design und hoher
								Sicherheitsqualität, angepasst an jeden Stil und jedes Budget.
								Ob Sie eine elegante <b>Haustür kaufen</b> möchten, oder eine robuste
								<b>Eingangstür</b> mit zusätzlichem Einbruchschutz suchen – bei uns
								finden Sie vielfältige Optionen in unterschiedlichen Designs und
								Preisklassen.
							</p>
						</div>

						<h2 className="uppercase text-lg text-center text-black tracking-widest my-15">
							Eingangstüren Angebot
						</h2>

						<div className="grid md:grid-cols-3 gap-6">
							<ProductsGrid
								imageSrc="/aluplast-paneeltur.png"
								title="ALUPLAST"
								subtitle="Paneel-Tür"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aluplast-eingangstur85mm.png"
								title="ALUPLAST"
								subtitle="Eingangstür 85 mm"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aluplast-eingangstur70mm.png"
								title="ALUPLAST"
								subtitle="Eingangstür 70 mm"
								link="#"
							/>
						</div>
					</div>
				</div>

				<div className="bg-white py-10 text-black">
					<div className="container mx-auto px-50">
						<div>
							<p className="text-2xl py-5">
								Arten von Hauseingangstüren: PVC, Aluminium und Holz
							</p>
							<p className="my-8 text-lg">PVC-Haustüren</p>
							<p className="mb-5">
								PVC-Haustüren sind preiswert, pflegeleicht und energieeffizient.
								Sie bieten gute Isolationswerte und sind wetterbeständig, was
								sie zu einer langlebigen Option macht. Dank moderner
								Fertigungstechniken gibt es PVC-Türen mittlerweile in vielen
								Designs und Farben, sodass sie gut zu verschiedenen Hausstilen
								passen. Ein Nachteil kann jedoch sein, dass sie im Vergleich zu
								anderen Materialien weniger stabil wirken.
							</p>
							<p className="my-8 text-lg">Aluminium-Haustüren</p>
							<p className="mb-5">
								Aluminiumtüren sind extrem langlebig und bieten hervorragenden
								Einbruchschutz. Sie sind pflegeleicht, rosten nicht und bieten
								durch ihre stabile Konstruktion hohe Sicherheit.
								Aluminium-Haustüren passen gut zu modernen und minimalistischen
								Architekturen und lassen sich mit wärmeisolierenden Schichten
								ausstatten. Ein Nachteil ist jedoch ihr etwas höherer Preis im
								Vergleich zu PVC- oder Holztüren.
							</p>
							<p className="my-8 text-lg">Holz-Haustüren</p>
							<p className="mb-5">
								Holztüren strahlen natürliche Wärme und Eleganz aus. Sie bieten
								hervorragende Dämmwerte und lassen sich leicht individuell
								gestalten. Holz ist jedoch pflegeintensiver und anfälliger für
								Wettereinflüsse, was eine regelmäßige Wartung erfordert. Für
								Liebhaber eines natürlichen und traditionellen Stils sind
								Holztüren jedoch ideal.
							</p>
							<p className="mb-5">
								Jedes Material hat seine Vorteile: PVC ist kostengünstig und
								pflegeleicht, Aluminium überzeugt durch Langlebigkeit und
								Sicherheit, während Holz eine warme, natürliche Optik bietet.
								Die beste Wahl hängt vom persönlichen Stil, Budget und
								Sicherheitsbedürfnis ab – Aluminium ist jedoch oft die
								langlebigste und sicherste Option.
							</p>
						</div>
						<div>
							<p className="text-2xl my-8">
								Häufig gestellte Fragen zu Eingangstüren
							</p>
							<Accordion variant="shadow">
								<AccordionItem
									key="1"
									aria-label="Accordion 1"
									title="Welche Materialien eignen sich am besten für Hauseingangstüren?"
									className="text-xl my-2">
									{defaultContent[0]}
								</AccordionItem>
								<AccordionItem
									key="2"
									aria-label="Accordion 2"
									title="Sind Aluminium-Haustüren sicherer als andere Materialien?"
									className="text-xl my-2">
									{defaultContent[1]}
								</AccordionItem>
								<AccordionItem
									key="3"
									aria-label="Accordion 3"
									title="Wie pflege ich eine Haustür aus Holz?"
									className="text-xl my-2">
									{defaultContent[2]}
								</AccordionItem>
								<AccordionItem
									key="4"
									aria-label="Accordion 4"
									title="Welche Haustür ist am besten für eine gute Wärmedämmung?"
									className="text-xl my-2">
									{defaultContent[3]}
								</AccordionItem>
								<AccordionItem
									key="5"
									aria-label="Accordion 5"
									title="Wie lange hält eine Haustür im Durchschnitt?"
									className="text-xl my-2">
									{defaultContent[4]}
								</AccordionItem>
							</Accordion>
						</div>
						<div>
							<p className="text-2xl py-10">
								Preise für Eingangstüren: Was beeinflusst die Kosten?
							</p>
							<p className="mb-5">
								Der Preis einer <b>Hauseingangstür</b> wird von verschiedenen Faktoren
								beeinflusst. Ein entscheidender Punkt ist das Material:
								<b>Haustüren</b> aus Aluminium sind in der Regel teurer als PVC- oder
								Holztüren, da sie hohe Stabilität und exzellenten Einbruchschutz
								bieten. Die Wahl einer <b>Haustür aus Polen</b> kann oft eine
								preiswerte Alternative darstellen, ohne auf Qualität verzichten
								zu müssen.
							</p>
							<p className="mb-5">
								Ein weiterer wichtiger Faktor ist das Design und die
								Ausstattung. Wer <b>Haustüren kaufen</b> möchte, die individuell
								gestaltet sind, zum Beispiel mit Glas- oder
								Sicherheitselementen, muss mit höheren Kosten rechnen. Auch
								zusätzliche Wärmedämmungselemente können den Preis steigern, was
								allerdings langfristig Energiekosten sparen kann.
							</p>
							<p className="mb-5">
								Der Einbau einer <b>Haustüre</b> spielt ebenfalls eine Rolle. Besonders
								bei individuell angefertigten oder übergroßen Türen kann der
								Einbau komplex sein und zusätzliche Kosten verursachen. Für
								<b>günstige Haustüren</b> ist es oft sinnvoll, nach Optionen mit
								Standardmaßen und -designs zu suchen, die den Anforderungen
								gerecht werden, ohne das Budget zu sprengen.
							</p>
						</div>
					</div>
				</div>
			</section>
			<ContactSection />
		</>
	)
}
