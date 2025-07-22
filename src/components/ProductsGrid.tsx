import Image from 'next/image'

interface Props {
  imageSrc: string
  title: string
  subtitle: string
  link: string
}


// components/ProductsGrid.tsx


export default function ProductsGrid({ imageSrc, title, subtitle, link }: Props)  {
	return (


			
					
						<div
							className="border border-gray-200 py-[5px] px-5 my-5 rounded-lg hover:shadow-lg transition flex flex-col justify-around items-center text-center">
                                <div className="w-80 h-60 flex items-center justify-center bg-white transition hover:scale-110 duration-500 rounded">
  <Image
    src={imageSrc}
    alt={title}
    width={320}
    height={240}
    className="max-w-full max-h-full object-contain"
    objectFit="contain"
  />
</div>
							<h3 className="text-lg m-[10px] text-gray-800">
								{title}
							</h3>
                            <p className="text-2xl">{subtitle}</p>
														<a
								href={link}
								className=" font-semibold border rounded-2xl my-5 px-[20px] py-[10px] bg-black text-white hover:bg-[#36342D] transition ease-in duration-200">
								Mehr Anzeigen
							</a>
						</div>
					
		

	)
}
