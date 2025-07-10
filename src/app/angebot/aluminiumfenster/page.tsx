"use client"

import Herosub from "@/components/Herosub"
import ProductsGrid from "@/components/ProductsGrid"
import ContactSection from "@/components/ContactSection"
import WarumProductSection from "@/components/WarumProductSection"
import {Accordion, AccordionItem} from "@heroui/accordion"

export default function Aluminiumfenster() {
	const defaultContent = [
		"Aluminiumfenster bieten hervorragende Stabilität, hohe Sicherheit und Langlebigkeit. Sie sind korrosionsbeständig, pflegeleicht und verleihen Gebäuden eine moderne Ästhetik. Aufgrund ihrer Wiederverwertbarkeit sind sie zudem umweltfreundlich.",
		"Mit der richtigen Pflege können Aluminiumfenster mehrere Jahrzehnte halten. Aluminium ist ein extrem widerstandsfähiges Material, das selbst unter Witterungseinflüssen kaum verschleißt, was die Lebensdauer deutlich verlängert.",
		"Ja, besonders in Kombination mit hochwertiger Verglasung, wie Zweifach- oder Dreifachverglasung, bieten Aluminiumfenster gute Wärmedämmung und helfen, Heizkosten zu senken.",
		"Der Preisunterschied ergibt sich aus der Materialqualität, zusätzlichen Beschichtungen und möglichen Extras wie Sicherheits- oder Schallschutzverglasungen. Zudem erfordern Aluminiumfenster oft spezielle Montagemethoden.",
		"Aluminiumfenster bieten eine Reihe von Vorteilen gegenüber Kunststofffenstern, wie z. B. Langlebigkeit und Wartungsfreundlichkeit, sind jedoch in Bezug auf die Energieeffizienz den Kunststofffenstern unterlegen, was sie zu einer attraktiveren Option für Wohngebäude macht",
	]

	return (
		<>
			<Herosub
				title="Aluminiumfenster - die ideale Lösung für Gewerbeimmobilien"
				subtitle="Entdecken Sie langlebige und moderne Aluminiumfenster - die ideale Wahl für Geschäftshäuser und Büros. Mit WinDoorVision finden Sie die beste Lösung für Ihr Büro und jedes andere gewerbliche Gebäude. "
				backgroundImage="/aluminiumfenster.jpg"
			/>
			<section>
				<div className="bg-white py-10 text-black">
					<div className="container mx-auto px-50">
						<div>
							<p className="text-2xl py-10">Einführung in Aluminiumfenster</p>
							<p className="mb-5">
								<b>Aluminiumfenster</b> sind eine beliebte Wahl für moderne
								Gebäude und Gewerbeimmobilien. Sie bieten eine beeindruckende
								Kombination aus <b>Stabilität</b>, <b>Haltbarkeit</b> und{" "}
								<b>Ästhetik</b>, die besonders für Bürogebäude und größere
								Fassaden geeignet ist.
							</p>
							<p className="mb-5">
								Aluminium ist ein <b>widerstandsfähiges</b> Material, das extrem
								langlebig ist und selbst unter intensiver Nutzung kaum Wartung
								erfordert. Dank seiner robusten Struktur sind{" "}
								<b>Aluminiumfenster</b>
								besonders gut für große Glasflächen geeignet, die gleichzeitig
								modern und elegant wirken.
							</p>
							<p className="mb-5">
								Durch die <b>Langlebigkeit</b> und <b>Umweltfreundlichkeit</b>{" "}
								von Aluminium sind diese Fenster eine nachhaltige Wahl, die sich
								langfristig lohnt und durch die Vielseitigkeit in verschiedenen
								Designs und Größen besticht. Ob für Neubauten oder
								Modernisierungen – Aluminiumfenster vereinen Funktionalität und
								ansprechende Optik.
							</p>
						</div>

						<h2 className="uppercase text-lg text-center text-black tracking-widest my-15">
							ALUMIUM FENSTER BIETEN
						</h2>

						<div className="grid md:grid-cols-3 gap-6">
							<ProductsGrid
								imageSrc="/aliplast-maxlight-min.png"
								title="ALIPLAST"
								subtitle="Max Light"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aliplast-steelook-min.png"
								title="ALIPLAST"
								subtitle="Steel Look"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aliplast-ecofunural-min.png"
								title="ALIPLAST"
								subtitle="Ecofutural"
								link="#"
							/>
						</div>
						<div className="grid md:grid-cols-3 gap-6">
							<ProductsGrid
								imageSrc="/aliplast-superial-min.png"
								title="ALIPLAST"
								subtitle="Superial"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aliplast-genesis75-min.png"
								title="ALIPLAST"
								subtitle="Genesis 75"
								link="#"
							/>
							<ProductsGrid
								imageSrc="/aliplast-star-min.png"
								title="ALIPLAST"
								subtitle="Star"
								link="#"
							/>
						</div>
					</div>
				</div>
				<div className="py-5">
					<div className="container mx-auto px-50">
						<p className="text-2xl py-5">Einführung in Aluminiumfenster</p>
						<p className="py-5">
							Aluminiumfenster bieten viele Vorteile, die sie zur idealen Wahl
							für moderne Gebäude und Büroflächen machen. Ihre hohe Stabilität
							und lange Lebensdauer machen sie besonders wartungsarm und
							umweltfreundlich.
						</p>
						<div>
							<WarumProductSection
								imageSrc="/warum-icon-4.png"
								title="Resistenz gegen äußere Einflüsse"
								description="Aufgrund der Eigenschaften von Aluminium sind diese Fenster sehr widerstandsfähig gegen äußere Einflüsse, wartungsarm und äußerst langlebig, was sie zu einer idealen Lösung für langfristige Investitionen in hochwertige Gebäude macht."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-1.png"
								title="Umweltfreundlich"
								description="Aluminium ist ein recycelbares Material und kann bei Bedarf wiederverwertet werden, was die Umwelt schont."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-5.png"
								title="Instandhaltung"
								description="Die Reparierbarkeit von Aluminiumsystemen ist wesentlich höher als die von Holz- oder Kunststoffalternativen."
							/>
							<WarumProductSection
								imageSrc="/warum-icon-3.png"
								title="Sicherheit"
								description="Aluminiumfenster bieten eine hohe Sicherheit durch ihre starke Konstruktion, die Einbruchsversuchen widersteht."
							/>
						</div>
					</div>
				</div>
				<div className="bg-white py-10 text-black">
					<div className="container mx-auto px-50">
						<div>
							<p className="text-2xl py-10">
								Aluminiumfenster Preise: Was beeinflusst die Kosten?
							</p>
							<p className="mb-5">
								Die Kosten für Aluminiumfenster können je nach verschiedenen
								Faktoren variieren, wobei die Materialqualität und die
								Komplexität des Designs eine große Rolle spielen. Hier sind
								einige der wichtigsten Einflussfaktoren:
							</p>
							<p className="mb-5 font-bold">1. Fenstergröße und -design</p>
							<p className="mb-5">
								Große Aluminiumfenster oder maßgeschneiderte Designs, wie
								Alu-Fixfenster, kosten in der Regel mehr als standardisierte
								Modelle. Individuelle Gestaltungswünsche oder spezielle
								Oberflächenbehandlungen, wie z. B. eloxiertes oder
								pulverbeschichtetes Aluminium, erhöhen den Preis.
							</p>
							<p className="mb-5 font-bold">2. Verglasungsoptionen</p>
							<p className="mb-5">
								Die Art und Qualität der Verglasung haben großen Einfluss auf
								den Preis. Zweifach- oder Dreifachverglasungen, die bessere
								Wärmedämmung bieten, sind kostenintensiver, sparen jedoch
								langfristig Energiekosten.
							</p>
							<p className="mb-5 font-bold">
								3. Sicherheits- und Schallschutzoptionen
							</p>
							<p className="mb-5">
								Je nach Standort des Gebäudes können zusätzliche Sicherheits-
								und Schallschutzmaßnahmen erforderlich sein.
								Sicherheitsbeschläge oder schalldämmende Gläser steigern die
								Kosten, bieten jedoch erhöhten Komfort und Sicherheit.
							</p>
							<p className="mb-5 font-bold">4. Einbaukosten</p>
							<p className="mb-5">
								Die Montagekosten sind ein weiterer Faktor. Professionelle
								Montage ist besonders wichtig, um die Wärmedämmung und
								Stabilität der Aluminiumfenster zu gewährleisten, was die
								Gesamtkosten weiter beeinflussen kann.
							</p>
							<p className="mb-5">
								Durch die verschiedenen Kombinationsmöglichkeiten aus Größe,
								Design und zusätzlichen Funktionen kann der Preis für
								Aluminiumfenster an die individuellen Bedürfnisse angepasst
								werden. Ein detailliertes Angebot gibt Ihnen einen genauen
								Überblick über die zu erwartenden Kosten.
							</p>
						</div>
						<div>
							<p className="text-2xl my-10">
								Häufige Fragen zu Aluminiumfenster
							</p>
							<Accordion variant="shadow">
								<AccordionItem
									key="1"
									aria-label="Accordion 1"
									title="Was sind die Hauptvorteile von Aluminiumfenstern?" className="text-xl my-2">
									{defaultContent[0]}
								</AccordionItem>
								<AccordionItem
									key="2"
									aria-label="Accordion 2"
									title="Wie lange halten Aluminiumfenster?" className="text-xl my-2">
									{defaultContent[1]}
								</AccordionItem>
								<AccordionItem
									key="3"
									aria-label="Accordion 3"
									title="Sind Aluminiumfenster energieeffizient?" className="text-xl my-2">
									{defaultContent[2]}
								</AccordionItem>
								<AccordionItem
									key="4"
									aria-label="Accordion 4"
									title="Was macht Aluminiumfenster teurer als andere Fenster?" className="text-xl my-2">
									{defaultContent[3]}
								</AccordionItem>
								<AccordionItem
									key="5"
									aria-label="Accordion 5"
									title="Welche Fenster sind besser: Aluminium oder Kunststoff?" className="text-xl my-2">
									{defaultContent[4]}
								</AccordionItem>
							</Accordion>
						</div>
						<div>
							<p className="text-2xl py-10">
								Wo kann man Aluminiumfenster kaufen?
							</p>
							<p className="mb-5">
								Jetzt ist der perfekte Zeitpunkt, um <b>Aluminiumfenster</b> zu kaufen
								und Ihr Gebäude langlebig, sicher und stilvoll zu gestalten.
								Unsere Aluminiumfenster vereinen modernes Design mit
								außergewöhnlicher Widerstandsfähigkeit und bieten Ihnen höchste
								Qualität zu fairen Preisen.
							</p>
							<p className="mb-5">
								Wählen Sie aus einer breiten Palette an <b>Fenstern aus Aluminium</b>,
								die speziell auf Ihre Anforderungen zugeschnitten sind – ob
								Standardmodelle oder individuell angepasst. Vergleichen Sie
								unsere <b>Aluminiumfenster Preise</b> und finden Sie die optimale
								Lösung für Ihr Gebäude.
							</p>
							<p className="mb-5">
								Bestellen Sie Ihre <b>Fenster aus Aluminium</b> noch heute und
								profitieren Sie von unseren attraktiven Angeboten und unserem
								professionellen Service!
							</p>
						</div>
					</div>
				</div>
			</section>
			<ContactSection />
		</>
	)
}
