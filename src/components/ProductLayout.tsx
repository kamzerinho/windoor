"use client";
import React from 'react';
import { Product } from '@/data/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ContactSection from './ContactSection';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import carouselImages from '@/data/carouselImages';
import { carouselImages1, carouselImages2 } from '@/data/twoCarouselsImages';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductLayoutProps {
  product: Product;
  breadcrumbs?: React.ReactNode;
}

function splitTitleSubtitle(title: string, subtitle: string) {
  return { main: title, sub: subtitle };
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ product, breadcrumbs }) => {
  const { main, sub } = splitTitleSubtitle(product.title, product.subtitle);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/productDescriptions/${product.id}.md`)
      .then(res => res.text())
      .then(setMarkdown);
  }, [product.id]);

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 p-5">
      <div className="w-full container mx-auto">
          {breadcrumbs}
        </div>
        </div>
      {/* 2 columns: image left, info right, with breadcrumbs above */}
      <div className="flex flex-col md:flex-row gap-8 bg-white py-10">
        
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <Image
            src={product.image}
            alt={main + ' ' + sub}
            width={600}
            height={500}
            className="object-contain mx-auto rounded-lg"
            style={{ maxWidth: '600px', maxHeight: '500px', width: '100%', height: 'auto' }}
            priority
          />
        </div>
        {/* Right col: title, subtitle, shortDescription */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-6">
          <div className="mb-2 flex flex-col gap-5">
            <span className="text-md font-semibold text-gray-500 uppercase tracking-widest">{sub}</span>
            <span className="text-3xl text-black">{main}</span>
            <div style={{ borderTop: "1px solid #000 ",  width: "400px" }}></div>
          </div>
          <p className="my-4 max-w-[75%] max-sm:w-full max-sm:px-5 text-gray-700 text-lg">{product.shortDescription}</p>
        </div>
      </div>
      {/* Description full width */}
      <div className="bg-white text-black">
      <div className="w-full px-6 pb-6 pt-6 container mx-auto">
      <div className="markdown-body">
        <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
      {/* Carousels */}
      <div className="w-full p-6">
        {product.layoutType === 'two-carousels' && (
          <div className="flex flex-col gap-6 container mx-auto">
            {/* First carousel: always 5 slides per view, fill with placeholders if needed */}
            <div>
              <h3 className="text-2xl text-center font-bold p-6">Bauoptionen</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={5}
                className="rounded-lg"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 5 },
                }}
              >
                {[
                  ...((product.carouselImages1 || carouselImages1)),
                  ...Array(Math.max(0, 5 - ((product.carouselImages1 || carouselImages1).length))).fill('#'),
                ].map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="p-4 h-full flex items-center justify-center">
                      {img === '#' ? (
                        <div className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-lg text-gray-400">Bild</div>
                      ) : (
                        <Image src={img} alt={`carousel 1 ${idx + 1}`} width={600} height={300} className="w-full h-56 object-contain rounded-lg" />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Second carousel: 7 slides per view on large screens, responsive */}
            <div className="p-6">
              <h3 className="text-2xl text-center font-bold p-6">ALUPLAST Color Palette</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-lg"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 7 },
                }}
              >
                {[
                  ...((product.carouselImages2 || carouselImages2)),
                  ...Array(Math.max(0, 7 - ((product.carouselImages2 || carouselImages2).length))).fill('#'),
                ].map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="p-4 h-full flex items-center justify-center">
                      {img === '#' ? (
                        <div className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-lg text-gray-400">Bild</div>
                      ) : (
                        <Image src={img} alt={`carousel 2 ${idx + 1}`} width={600} height={300} className="w-full h-56 object-contain rounded-lg" />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
        {product.layoutType === 'one-carousel' && (
          <div className="my-6 container mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={5}
              className="rounded-lg"
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 5 },
              }}
            >
              {(product.carouselImages1 || carouselImages).map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="p-4 h-full flex items-center justify-center">
                    <Image src={img} alt="carousel" width={600} height={300} className="w-full h-56 object-contain rounded-lg" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {product.layoutType === 'second-carousel' && (
          <div className="container mx-auto">
            <div className="p-6">
              <h3 className="text-2xl text-center font-bold p-6">ALUPLAST Color Palette</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-lg"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 7 },
                }}
              >
                {[
                  ...((product.carouselImages2 || carouselImages2)),
                  ...Array(Math.max(0, 7 - ((product.carouselImages2 || carouselImages2).length))).fill('#'),
                ].map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="p-4 h-full flex items-center justify-center">
                      {img === '#' ? (
                        <div className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-lg text-gray-400">Bild</div>
                      ) : (
                        <Image src={img} alt={`carousel 2 ${idx + 1}`} width={600} height={300} className="w-full h-56 object-contain rounded-lg" />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
      </div>
      {/* ContactSection at the bottom */}
      <div className="w-full mt-10">
        <ContactSection />
      </div>
    </div>
  );
};

export default ProductLayout; 