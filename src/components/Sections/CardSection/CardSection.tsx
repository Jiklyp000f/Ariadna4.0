import { ProductCard } from "../../Cards/ProductCard";
import { eventsArray } from "./data";
import type { Event } from "./types";

import style from "./styles.module.scss";

export const CardSection = () => {
  return (
    <div className={style.container}>
      {eventsArray.map((event: Event) => {
        return <ProductCard {...event} />;
      })}
    </div>
  );
};
