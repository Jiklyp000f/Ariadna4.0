import { eventsArray } from "./data";
import type { Event } from "./types";
import { ProductCard } from "./Cards/ProductCard";

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
