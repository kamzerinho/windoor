'use client'

import Image from 'next/image';

import Link from 'next/link';


interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section className="relative h-[55vh] w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className=" bg-black opacity-[80%] -z-10"
      />

      <div className="absolute container mx-auto inset-0 flex flex-col justify-center text-white text-left max-sm:px-5">
        <h1 className="text-md md:text-4xl font-bold mb-4 text-left">{title}</h1>
        <p className="text-sm md:text-xl max-w-2xl text-left">{subtitle}</p>
        <div><Link href={`/angebot`} className="mt-auto inline-block bg-neutral-900 text-white px-4 py-2 rounded hover:bg-neutral-800 transition">Angebot Prüfen</Link></div>
      </div>
    </section>
  );
}
