import React from "react";
import { BannerSlideProps } from "./type";
import "./style.css";
import { BannerText } from "./components/BannerText";

const BannerSlide: React.FC<BannerSlideProps> = (props) => {
  const { image, title, subtitle, legend } = props;

  return (
    <div className="banner-slide">
      <div className="banner-slide__text">
        {title && <BannerText {...title} />}
        {subtitle && <BannerText {...subtitle} />}
        {legend && <BannerText {...legend} />}
      </div>
      <img
        src={image}
        alt="Banner promocional"
        className="banner-slide__image"
      />
    </div>
  );
};

export default BannerSlide;
