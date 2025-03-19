import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { postItMessagesArray } from "../assets/data/postItMessagesArray";

const colors = [
  "#fffa65",
  "#a3e635",
  "#3ec1d3",
  "#9b51e0",
  "#ff4d6d",
  "#ff9f1c",
];

const PostItCarousel = () => {
  return (
    <div className="carousel">
      <h2>Te devolvendo seus Post-its!</h2>
      <Swiper
        modules={[EffectCards]}
        effect={"cards"}
        grabCursor={true}
        rewind={true}
        className="carousel__swiper"
      >
        {postItMessagesArray.map((item, index) => {
          const fixedColor = colors[index % colors.length];

          return (
            <SwiperSlide
              key={index}
              className="carousel__post-it"
              style={{ backgroundColor: fixedColor }}
            >
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PostItCarousel;
