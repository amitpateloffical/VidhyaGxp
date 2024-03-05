import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import "swiper/swiper.min.css"; // Import Swiper styles
import "swiper/components/navigation/navigation.min.css"; // Import Swiper navigation styles
import "swiper/components/pagination/pagination.min.css"; // Import Swiper pagination styles
import "swiper/components/autoplay/autoplay.min.css"; // Import Swiper autoplay styles
import { Swiper, SwiperSlide } from "swiper/react";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const MySwiper = () => {
  return (
    <Swiper spaceBetween={30} slidesPerView={3} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000 }}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default MySwiper;
