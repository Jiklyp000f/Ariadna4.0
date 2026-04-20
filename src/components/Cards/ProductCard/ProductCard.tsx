import { Title } from "@/shared/ui/Titles";
import type { Event } from "../../Sections/CardSection/types";
import style from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { AppButtonPrimary } from "@/shared/ui/button";
import { FieldTimeOutlined } from "@ant-design/icons";

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
    <div
      className={style.productCard}
      style={{ filter: disabled ? "grayscale(100%)" : "none" }}
    >
      <img src={img} alt="img" />
      <div className={style.titleContainer}>
        <Title variant="4">{title}</Title>
      </div>

      {time ? (
        <div className={style.time}>
          <FieldTimeOutlined />
          <span>{time} минут</span>
        </div>
      ) : null}

      <div className={style.price}>{price ? <p>{price} ₽</p> : null}</div>
      <div className={style.button}>
        <AppButtonPrimary
          wide
          disabled={disabled}
          onClick={() => navigate(href)}
        >
          {disabled ? "В разработке" : "Сыграть"}
        </AppButtonPrimary>
      </div>
    </div>
  );
};
