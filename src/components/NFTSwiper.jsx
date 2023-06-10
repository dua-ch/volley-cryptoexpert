import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import sliderImg from "../assets/imgs/slider-1.png";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const NFTSwiper = () => {
  return (
    <Swiper
      grabCursor={true}
      slidesPerView={1}
      speed={1200}
      pagination={true}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <img src={sliderImg} alt="sliderImg" />
        <h5 className="font-roboto text-3xl font-medium text-center">BOT </h5>
        <p className="font-roboto text-base text-center">@GenieBuyTracker_bot</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg} alt="sliderImg" />
        <h5 className="font-roboto text-3xl font-medium text-center">BOT </h5>
        <p className="font-roboto text-base text-center">@GenieBuyTracker_bot</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default NFTSwiper;
