import { Title } from "@/shared/ui/Titles";
import style from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { AppButtonPrimary } from "@/shared/ui/button";
import { FieldTimeOutlined } from "@ant-design/icons";
import type { Event } from "@/pages/main/sections/CardSection/types";
import { Rate } from "antd";

export const ProductCard: React.FC<Event> = (props) => {
  const { img, title, time, price, disabled, href } = props;

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

      <p className={style.description}>
        Здравствуйте товарищи начинаем программу телепередач на зватра!
      </p>

      <Rate allowHalf defaultValue={2.5} />

      <div className={style.bottom}>
        {time && (
          <div className={style.time}>
            <FieldTimeOutlined />
            <span>{time} минут</span>
          </div>
        )}
        <div className={style.price}>{price ? <p>{price} ₽</p> : null}</div>
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
