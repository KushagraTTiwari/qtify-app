import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import CardsComponent from "./CardsComponent";
// import RightIcon from "../assets/Right.png";
// import LeftIcon from "../assets/left.png";
// import "./Swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperUi = ({ data }) => {
  // console.log("swiper ui", data);
  const customNavigationIcons = {
    prevEl: ".custom-prev",
    nextEl: ".custom-next",
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView="auto"
      navigation={customNavigationIcons}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {data.map((ele, index) => (
        <SwiperSlide key={index}>
          <CardsComponent
            name={ele.slug}
            image={ele.image}
            follows={ele.follows}
            key={index}
          />
        </SwiperSlide>
      ))}

      {/* Custom navigation icons */}
      <div className="custom-prev">
        <span style={{ fontSize: "24px" }}>&#8593;</span>
      </div>
      <div className="custom-next">
        <span style={{ fontSize: "24px" }}>&#8594;</span>
      </div>
    </Swiper>
  );
};

export default SwiperUi;
