import React from "react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import TestimonialCard from "../components/testimonial_card";
function Testimonials() {
  SwiperCore.use([Autoplay, EffectCoverflow]);

  return (
    <div className="testimonials">
      {" "}
      <div className="page-title">
        <h2 className="page-name">Testimonials</h2>
      </div>
      <div className="testimonials-body">
        <Swiper
          modules={[
            Autoplay,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectCoverflow,
          ]}
          effect={"coverflow"}
          centeredslides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            // slideShadows:false


          }}
          grabCursor={true}
          autoplay={{ delay: 4000 }}
          spaceBetween={5}
          slidesPerView={3}
          navigation
         
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}

          className= "testimonial-swiper"
        >
          <SwiperSlide>
            <TestimonialCard></TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard></TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard></TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard></TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard></TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard></TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard></TestimonialCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
