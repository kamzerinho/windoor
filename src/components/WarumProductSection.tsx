import Image from "next/image"

interface Props {
	imageSrc: string
	title: string
	description: string
}

export default function WarumProductSection({
	imageSrc,
	title,
	description,
}: Props) {
	return (
		<div className="flex flex-row gap-10 items-center">
			<div className="transition hover:scale-110 duration-500">
				<Image
					src={imageSrc}
					alt={title}
					width={80}
					height={80}
					className="object-cover"
				/>
			</div>
			<div className="w-fit py-5">
				<h3 className="text-lg py-4">{title}</h3>
				<p className="">{description}</p>
			</div>
		</div>
	)
}
