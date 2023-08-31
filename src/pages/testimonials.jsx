import React from "react";
import kim from "../images/testimonial/kim.jpeg";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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
      <div className="page-desc">
        <p>
          Experience the journey of innovation through the lens of those who've
          witnessed it firsthand. Explore the words of clients and colleagues
          who have seen their concepts transformed into captivating digital
          experiences. These testimonials offer a glimpse into the seamless
          blend of intuitive design and expert coding that define my work.
        </p>
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
          autoplay={{ delay: 7000 }}
          spaceBetween={5}
          slidesPerView={3}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
            clickable: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="testimonial-swiper"
        >
          <SwiperSlide>
            <TestimonialCard
              name="Kim"
              image={kim}
              testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores id porro nesciunt vel pariatur laboriosam nihil numquam perferendis magni placeat officiis, facere dignissimos commodi nam tempore odit, iste incidunt!"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Kim"
              image={kim}
              testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores id porro nesciunt vel pariatur laboriosam nihil numquam perferendis magni placeat officiis, facere dignissimos commodi nam tempore odit, iste incidunt!"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Kim"
              image={kim}
              testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores id porro nesciunt vel pariatur laboriosam nihil numquam perferendis magni placeat officiis, facere dignissimos commodi nam tempore odit, iste incidunt!"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Ababa tesfaye"
              image={kim}
              testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores id porro nesciunt vel pariatur laboriosam nihil numquam perferendis magni placeat officiis, facere dignissimos commodi nam tempore odit, iste incidunt!"
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="ran out of names"
              image={kim}
              testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores id porro nesciunt vel pariatur laboriosam nihil numquam perferendis magni placeat officiis, facere dignissimos commodi nam tempore odit, iste incidunt!"
            />{" "}
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="testimonial-nav">
        <button className="prev">
          <IoIosArrowBack />
        </button>
        <button className="next">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
