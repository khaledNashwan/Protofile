// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Pro from "./Pro";
import phote1 from "../../assets/Capture.PNG";
import phote2 from "../../assets/Capture2.PNG";
import phote3 from "../../assets/Capture3.PNG";
import phote4 from "../../assets/Capture4.PNG";
import phote5 from "../../assets/Screenshot.jpg";
import phote6 from "../../assets/vewu.jpg";


const Carousel  = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },

        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Pro
            img={phote1}
            aaa="https://melodic-peony-69640d.netlify.app/"
            desc="React Project with context hook"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Pro
            img={phote2}
            aaa="https://velvety-trifle-17ede9.netlify.app/"
            desc="landing page with responsive design"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Pro
            img={phote3}
            aaa="https://splendorous-mochi-d802b6.netlify.app/"
            desc="landing page with responsive design and tailwindcss "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Pro img={phote4} />
        </SwiperSlide>
        <SwiperSlide>
          <Pro
            img={phote5}
            aaa="https://khalednashwan.netlify.app/"
            desc="React Project with redex toolkit"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Pro
            img={phote6}
            aaa="https://khaledwebsite2.netlify.app/"
            desc="landing page with responsive design "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel 