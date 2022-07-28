import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
        <SwiperSlide className="w-full flex items-center">
          <img
            className="w-full h-[560px]"
            src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/1.jpg?v=1623384286"
            alt="slide 1"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/mb_slider1_d5017c91-1d11-4d21-a133-dd35dea40802_750x.jpg?v=1630479141"
            alt="slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0147/0962/0800/files/mb_slider2_b1c45b9d-3fdf-426a-a07f-7ac8210e548c_750x.jpg?v=1630479141"
            alt="slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
