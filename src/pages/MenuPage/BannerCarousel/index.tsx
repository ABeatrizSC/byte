import React from "react";
import { BannerCarouselProps } from "./type";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const BannerCarousel: React.FC<BannerCarouselProps> = (props) => {
    const { children } = props;

    return (
        <div>
            <Swiper modules={[Navigation, Pagination, Autoplay]} slidesPerView={1} spaceBetween={0} navigation pagination={{ clickable: true }} autoplay>
                {children.map((child) => (
                    <SwiperSlide>{child}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default BannerCarousel;