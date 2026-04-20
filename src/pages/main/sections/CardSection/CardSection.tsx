import { eventsArray } from "./data";
import { ProductCard } from "@/components/Cards";

import type { Event } from "./types";

import style from "./styles.module.scss";

export const CardSection = () => {
  return (
    <div className={style.container}>
      {eventsArray.map((event: Event) => {
        return <ProductCard key={event.id} {...event} />;
      })}
    </div>
  );
};
