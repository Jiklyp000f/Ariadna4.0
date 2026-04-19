// SliderSection.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import style from "./SliderSection.module.css";
import "./swiper.styles.css";
import img1 from "@/assets/image/swiperImg/image1.png";
import img2 from "@/assets/image/swiperImg/image2.png";
import img3 from "@/assets/image/swiperImg/image3.png";
import img4 from "@/assets/image/swiperImg/image4.png";
import img5 from "@/assets/image/swiperImg/image5.png";
import img6 from "@/assets/image/swiperImg/image6.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Title } from "../../Titles/Title";

interface SlideItem {
  id: number;
  imageUrl: string;
  alt?: string;
}

const slidesData: SlideItem[] = [
  {
    id: 1,
    imageUrl: img1,
    alt: "img1",
  },
  {
    id: 2,
    imageUrl: img2,
    alt: "img2",
  },
  {
    id: 3,
    imageUrl: img3,
    alt: "img3",
  },
  {
    id: 4,
    imageUrl: img4,
    alt: "img4",
  },
  {
    id: 5,
    imageUrl: img5,
    alt: "img5",
  },
  {
    id: 6,
    imageUrl: img6,
    alt: "img6",
  },
];

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
