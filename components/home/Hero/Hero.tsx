/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroData } from "data";
import { map } from "underscore";
import { Button } from "components/ui";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Hero() {
  return (
    <div className=" w-full">
      <Swiper
        className="relative w-full"
        navigation
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {map(heroData, (item) => (
          <article className="flex w-full" key={item.id}>
            <SwiperSlide className="relative">
              <Image
                layout="responsive"
                width={1500}
                height={600}
                src={item.src}
                alt={item.title}
              />
              <div className="absolute left-32 top-1/3 mr-4 mb-4">
                <h1 className="mb-10 text-7xl font-semibold">{item.title}</h1>
                <p>From millions of things designed and sold by artists.</p>
                <Button varient="outline" className="mt-8 ">
                  <span>Shop now</span>
                </Button>
              </div>
            </SwiperSlide>
          </article>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
