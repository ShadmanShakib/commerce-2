import React from "react";
import Image from "next/image";
import { data } from "./data";
import { map } from "underscore";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function ProductMedia() {
  return (
    <section className="relative flex w-1/2">
      <div className="mr-3 flex flex-col">
        {map(data.images, (item, index) => {
          return (
            <article className="relative" key={index}>
              <Image alt={"hello"} src={item} width={100} height={100} />
            </article>
          );
        })}
      </div>

      <Swiper className="w-full" modules={[Navigation]}>
        {map(data.images, (item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                layout="responsive"
                alt="hello"
                src={item}
                width={400}
                height={400}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default ProductMedia;
