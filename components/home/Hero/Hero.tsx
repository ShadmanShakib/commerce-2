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
          <article className="flex" key={item.id}>
            <SwiperSlide className="relative">
              <Image
                height={600}
                width={1400}
                className=""
                src={item.src}
                alt={item.title}
              />
              <div className="absolute bottom-20 left-20 mr-4 mb-4">
                <h1>{item.title}</h1>
                <Button varient="outline" className=" ">
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
