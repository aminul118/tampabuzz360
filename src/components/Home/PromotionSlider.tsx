"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Type for each promotion item
type TPromo = {
  image: string;
  website: string;
};

// Props type
type PromotionSliderProps = {
  promotions: TPromo[];
};

const PromotionSlider = ({ promotions }: PromotionSliderProps) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      //   modules={[Autoplay, Pagination, Navigation]}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {promotions?.map((promo, i) => (
        <SwiperSlide key={i}>
          <Link target="_blank" href={promo.website}>
            <Image
              src={promo.image}
              alt="demo promotional image of Tampabuzz360"
              width={1920}
              height={200}
              className="w-full object-cover"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromotionSlider;
