import img1 from "@/assets/image/swiperImg/image1.png";
import img2 from "@/assets/image/swiperImg/image2.png";
import img3 from "@/assets/image/swiperImg/image3.png";
import img4 from "@/assets/image/swiperImg/image4.png";
import img5 from "@/assets/image/swiperImg/image5.png";
import img6 from "@/assets/image/swiperImg/image6.png";

// TODO: Удалить когда будут данные
interface SlideItem {
  id: number;
  imageUrl: string;
  alt?: string;
}

export const slidesData: SlideItem[] = [
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
