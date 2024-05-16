import React from "react";
import { BannerTextProps } from "./type";

export const BannerText: React.FC<BannerTextProps> = ({
  text,
  color,
  size,
}) => {
  return (
    <p className={`banner__text banner__text--${size}`} style={{ color }}>
      {text}
    </p>
  );
};
