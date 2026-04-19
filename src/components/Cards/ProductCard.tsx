import { Title } from "@/shared/ui/Titles";
import { Button } from "../Buttons/Button";
import type { Event } from "../Sections/CardSection/types";
import style from "./ProductCard.module.css";
import timeIcon from "@/assets/image/icons/time_icon.png";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({
  img,
  price,
  time,
  title,
  disabled,
  href,
}: Event) => {
  const navigate = useNavigate();
  return (
    <div className={style.productCard} style={{ opacity: disabled ? 0.75 : 1 }}>
      <img src={img} alt="img" />
      <div className={style.titleContainer}>
        <Title variant="4">{title}</Title>
      </div>

      {time ? (
        <div className={style.timeContainer}>
          <img src={timeIcon} alt="timeIcon" />
          <p>{time} минут</p>
        </div>
      ) : null}

      <div className={style.priceContainer}>
        {price ? <p>{price} ₽</p> : null}
      </div>
      <div className={style.button}>
        <Button disabled={disabled} onClick={() => navigate(href)}>
          {disabled ? "В разработке" : "Сыграть"}
        </Button>
      </div>
    </div>
  );
};
