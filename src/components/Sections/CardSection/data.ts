// TODO: Удалить когда будут данные

import batyshka from "@/assets/image/batyshka.png";
import house from "@/assets/image/house.png";
import cat from "@/assets/image/cat.png";
import type { Event } from "./types";

export const eventsArray: Event[] = [
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
