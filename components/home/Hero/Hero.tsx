/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroData } from "data";
import { map } from "underscore";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Hero() {
  return (
    <div>
      <Swiper
        navigation
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {map(heroData, (item) => (
          <SwiperSlide key={item.id}>
            <img src={item.src} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
