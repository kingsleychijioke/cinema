import React from "react";
import "./Movieswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Bgimg from "../../public/assets/movies/bg-transformer.jpg";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function Movieswiper({ slides, slidechange }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieswiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide._id}>
          <img
            src={slide.previewImg}
            alt="preview"
            onClick={() => slidechange(slide._id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Movieswiper;
