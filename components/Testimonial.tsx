"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import { useRef } from 'react';

type Review = {
  id: number;
  imageUrl: string;
  text: string;
};

const reviews: Review[] = [
  { id: 1, imageUrl: '/testimonial1.png', text: 'E-book writing has transformed our content approach. The team’s expertise is unmatched, making us leaders in digital publishing.' },
  { id: 2, imageUrl: '/testimonial2.png', text: 'A phenomenal service with skilled writers who truly understand the art of storytelling. Our brand’s voice is now clearer than ever.' },
  { id: 3, imageUrl: '/testimonial3.png', text: 'Professional, timely, and incredibly insightful. The e-book writing service took our project to new heights and helped boost our online presence.' },
  { id: 4, imageUrl: '/testimonial4.png', text: 'Professional, timely, and incredibly insightful. The e-book writing service took our project to new heights and helped boost our online presence.' },
];

const Testimonial = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="bg-black w-full h-[800px] px-20">
      <div className="bg-red-600 w-[600px] text-white font-bold py-8 text-center text-4xl absolute left-[650px] -rotate-6">
        TESTIMONIALS
      </div>
      <p className="text-white pt-[150px] text-center text-2xl px-96">
        Tap expert writers and a partner who gets modern content marketing. In a sea of sameness, stand out in search with E-book writing Service
      </p>

      <div className="flex items-center justify-center text-white pt-[50px] px-20">
        <Swiper
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={3}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white text-black rounded-lg p-5 shadow-md w-auto h-[400px] relative">
                <Image
                  src="/inverted-commas-open.png"
                  alt="comma"
                  width={50}
                  height={100}
                  className="absolute top-3 left-5"
                />
                <div className="flex flex-col items-center">
                  <Image
                    src={review.imageUrl}
                    alt=""
                    height={200}
                    width={200}
                    className="w-20 h-20 rounded-full mb-3"
                  />
                  <div className="text-yellow-500 flex text-5xl">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                  <p className="text-center text-xl mt-3 mb-4">{review.text}</p>
                  <Image
                    src="/inverted-commas-close.png"
                    alt="comma"
                    width={50}
                    height={100}
                    className="absolute bottom-2 right-4"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pl-20 mt-5">
          <h2 className="text-4xl font-bold mb-20">1000+ Positive Reviews Reflecting Customer Satisfaction</h2>
          <div className="flex gap-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-red-500 bg-white w-12 h-12 rounded-full flex items-center justify-center"
            >
              <ChevronLeft size={100} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white text-red-500 w-12 h-12 rounded-full flex items-center justify-center"
            >
              <ChevronRight size={100} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
