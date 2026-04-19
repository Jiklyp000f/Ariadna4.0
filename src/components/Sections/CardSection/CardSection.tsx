import { ProductCard } from "../../Cards/ProductCard";
import style from "./CardSection.module.css";
import type { Event } from "./types";
import batyshka from "@/assets/image/batyshka.png";
import house from "@/assets/image/house.png";
import cat from "@/assets/image/cat.png";

const eventsArray: Event[] = [
  {
    id: 1,
    img: batyshka,
    title: "Тайны застывших легенд",
    time: "75 - 90",
    price: 2000,
    disabled: false,
    href: "/batyshka",
  },
  {
    id: 2,
    img: house,
    title: "Архитектурный облик улицы Советской",
    time: "90",
    price: 2000,
    disabled: false,
    href: "/404",
  },
  {
    id: 3,
    img: cat,
    title: "Тайна Йошкина кота",
    time: null,
    price: null,
    disabled: true,
    href: "/404",
  },
];

export const CardSection = () => {
  return (
    <div className={style.container}>
      {eventsArray.map((event: Event) => {
        return <ProductCard {...event} />;
      })}
    </div>
  );
};
