import Image from 'next/image'
import Link from 'next/link';

interface Props {
  imageSrc: string
  title: string
  description: string
  link: string
}

export default function TextLeftImageRight({ imageSrc, title, description, link }: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-5 text-right">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 my-[25px]">{description}</p>
        <Link href={link} className="bg-white px-[20px] py-[10px] border rounded-lg mt-5 hover:text-white hover:bg-black hover:border-color-white cursor-pointer transition ease-in">Angebot Prüfen</Link>

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