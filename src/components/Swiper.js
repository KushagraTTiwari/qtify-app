import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import CardsComponent from "./CardsComponent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperUi = ({ data }) => {
  console.log("swiper ui", data);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView="auto"
      navigation
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
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
    </Swiper>
  );
};

export default SwiperUi;
