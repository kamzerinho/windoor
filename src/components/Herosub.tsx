'use client'

import Image from 'next/image';



interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function Herosub({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section className="relative h-[55vh] w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className=" bg-black opacity-[80%] -z-10"
      />

      <div className="absolute container mx-auto inset-0 flex flex-col justify-center text-white text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-left">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl text-left">{subtitle}</p>
      </div>
    </section>
  );
}
