import Image from 'next/image'
import {Button} from "@heroui/button";

interface Props {
  imageSrc: string
  title: string
  description: string
}

export default function TextLeftImageRight({ imageSrc, title, description }: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-5 text-right">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div><Button className="bg-white px-[20px] py-[10px] border rounded-lg mt-5 hover:text-white hover:bg-black hover:border-color-white cursor-pointer transition ease-in" size="md">Angebot Prüfen</Button></div>

      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}