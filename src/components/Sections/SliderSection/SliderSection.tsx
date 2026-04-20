import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Title } from "@/shared/ui/Titles";
import { slidesData } from "./data";

import style from "./styles.module.scss";
import "./swiper.styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SliderSection = () => {
  return (
    <div className={style.wrapper}>
      <Title variant="2">Ключевые объекты экскурсии</Title>
      <div className={style.sliderSection}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={style.slide}>
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className={style.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
