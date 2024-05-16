import React from "react";
import { BannerCarouselProps } from "./type";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { AutoplayOptions, PaginationOptions } from "swiper/types";
import "./style.css";

const BannerCarousel: React.FC<BannerCarouselProps> = (props) => {
  const { children } = props;

  const paginationConfig: PaginationOptions = {
    clickable: true,
    bulletClass: "carousel__bullet",
    bulletActiveClass: "carousel__bullet--active",
  };
  const autoplayConfig: AutoplayOptions = {
    delay: 5000,
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={paginationConfig}
        autoplay={autoplayConfig}
      >
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
