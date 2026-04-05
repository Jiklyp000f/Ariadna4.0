// SliderSection.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import style from "./SliderSection.module.css";
import "./swiper.styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideItem {
  id: number;
  imageUrl: string;
  alt?: string;
}

const slidesData: SlideItem[] = [
  {
    id: 1,
    imageUrl:
      "https://i.pinimg.com/originals/bf/17/0a/bf170abe8cffef0ae916c9efe19dd1c1.jpg",
    alt: "Горы",
  },
  {
    id: 2,
    imageUrl:
      "https://images.wallpaperscraft.ru/image/single/enot_zhivotnoe_podvodnyj_1343115_1280x720.jpg",
    alt: "Море",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/736x/0a/d0/7e/0ad07e3f1965bb1893f444d2e67da7c6.jpg",
    alt: "Лес",
  },
  {
    id: 4,
    imageUrl:
      "https://i.pinimg.com/originals/bf/17/0a/bf170abe8cffef0ae916c9efe19dd1c1.jpg",
    alt: "Город",
  },
  {
    id: 5,
    imageUrl:
      "https://images.wallpaperscraft.ru/image/single/enot_zhivotnoe_podvodnyj_1343115_1280x720.jpg",
    alt: "Пустыня",
  },
  {
    id: 6,
    imageUrl:
      "https://i.pinimg.com/736x/0a/d0/7e/0ad07e3f1965bb1893f444d2e67da7c6.jpg",
    alt: "Водопад",
  },
];

export const SliderSection = () => {
  return (
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
  );
};
