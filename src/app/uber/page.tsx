import Herosub from "@/components/Herosub"
import Image from "next/image"

export default function Angebot() {
	return (
		<>
			<Herosub
				title="Über uns"
				subtitle="WinDoorVision ist ein Unternehmen, das Fenster- und Türsysteme in ganz Europa liefert und einbaut. Wir haben unseren Sitz in Polen und arbeiten mit den führenden Herstellern von Fenstern und Türen zusammen, so dass wir Zugang zu den neuesten Produkten und Entwicklungen in diesem Bereich haben. Unser professionelles Team hilft Ihnen bei der Auswahl, Lieferung und Montage der von Ihnen bestellten Produkte."
				backgroundImage="/background-image-angebot.jpg"
			/>

			<section className="bg-white">
				<div className="container mx-auto bg-white">
					<h2 className="text-2xl text-black text-center pt-15">
						Daten zum Unternehmen
					</h2>
					<div className="grid md:grid-cols-2 gap-5 py-15">
            <div className="flex justify-end">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d9574.799281783382!2d23.1413541794439!3d53.13353392927346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x471ffc0ffaa915d1%3A0x9a451a31252d903f!2sLipowa%2C%2015-369%20Bia%C5%82ystok!3m2!1d53.1335215!2d23.1516539!4m0!5e0!3m2!1spl!2spl!4v1752147156642!5m2!1spl!2spl"
							width="600"
							height="450"
							className=""></iframe>
              </div>
						<div className="text-black text-lg md:text-2xl flex flex-col justify-center max-sm:px-5">
							<div className="flex flex-row gap-2 items-center py-2">
								<Image src="/mail-open-minus-svgrepo-com.svg" alt="mail" className="w-10 h-10" />
								<p className="">sales@windoorvision.eu</p>
							</div>
              <div className="flex flex-row gap-2 items-center py-2"><Image src="/phone-call-svgrepo-com.svg" alt="phone" className="w-10 h-10" /><p className="">+48 502 024 998</p></div>
              <div className="flex flex-row gap-2 items-center py-2"><Image src="/address-location-map-svgrepo-com.svg" alt="pin" className="w-10 h-10" /><p className="">ul. Lipowa 329, 123-45 Białystok</p></div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
