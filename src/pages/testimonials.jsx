import React from "react";
import birukZewdu from "../images/testimonial/Biruk_Zewdu.jpg";
import natnaelBekele from "../images/testimonial/Natnael_Bekele.jpg";
import zerabruckMuluneh from "../images/testimonial/ZeraBruck_Muluneh.jpg";
import mikiasDaniel from "../images/testimonial/Mikias_Daniel.jpg";
import abelKidaneMariam from "../images/testimonial/Abel_KidaneMariam.jpg";

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
              name="Natnael Bekele | Head Of Acadamy at A2SV"
              image={natnaelBekele}
              testimonial="In the face of adversity, Zalbo shines brightest. He once saved our project from a potential catastrophe with a brilliant solution. His ability to turn obstacles into triumphs is truly remarkable."
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Zerabruck Muluneh | Colleague Software Engineer"
              image={zerabruckMuluneh}
              testimonial="It's with great pleasure that I highly recommend Zalbo. Working closely with him, I've been consistently amazed by his talent and dedication. His deep understanding of Flutter, coupled with his creativity, has resulted in products that exceeded my expectations."
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Mikias Daniel | Product Manager"
              image={mikiasDaniel}
              testimonial="I wholeheartedly recommend Zalbowossn Gizaw for his exceptional skills, ambition, unwavering integrity, and problem-solving prowess. He's a resilient, altruistic team player, and I have complete confidence in his abilities."
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Biruk Zewdu | Head Of Education at A2SV"
              image={birukZewdu}
              testimonial="Zalbowossn is a lifelong learner in the world of technology. He continuously seeks opportunities to expand his skillset and brings fresh, cutting-edge insights to our projects. His passion for staying updated is contagious."
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Abel KidaneMariam | Web Developer at Eskalate"
              image={abelKidaneMariam}
              testimonial="Zalbo is the React maestro you want on your team. I've had the privilege of working closely with him, and he's a true gem. His expertise in development, attention to detail, and commitment to code quality consistently lead to exceptional outcomes."
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
