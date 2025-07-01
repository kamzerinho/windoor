'use client'

import Image from 'next/image';

import {Button} from "@heroui/button";


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

      <div className="absolute inset-0 flex flex-col justify-center mx-[25%] text-white text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-left">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl text-left">{subtitle}</p>
        <div><Button className="bg-black px-[20px] py-[10px] border rounded-lg mt-5 hover:text-black hover:bg-white hover:border-color-black cursor-pointer transition ease-in" size="md">Angebot Prüfen</Button></div>
      </div>
    </section>
  );
}
