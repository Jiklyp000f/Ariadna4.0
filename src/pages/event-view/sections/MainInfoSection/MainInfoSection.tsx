import style from "./styles.module.scss";
import batyshka from "@/assets/image/batyshka.png";
import { Title } from "@/shared/ui/titles";
import { Description } from "./Description";
import { DescriptionItem } from "./Description/DescriptionItem";
import { Rate } from "antd";
import { addToOrder } from "@/store/orderStore";
import { AppButtonPrimary } from "@/shared/ui/button";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/store/authStore";

const eventData = {
  id: 1,
  title: "«Тайны застывших легенд»",
  description:
    "Квест-экскурсия по скульптурам исторических личностей города Йошкар-Олы",
  rating: 4.5,
  price: 500,
};

export const MainInfoSection = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <img src={batyshka} alt="" className={style.picture} />
      </div>
      <div className={style.right}>
        <div>
          <Title variant="2">«Тайны застывших легенд»</Title>
          <p className={style.subtitle}>
            Квест-экскурсия по скульптурам исторических личностей города
            Йошкар-Олы
          </p>

          {isAuth && (
            <AppButtonPrimary
              icon={<PlusCircleOutlined />}
              onClick={() => addToOrder(eventData)}
            >
              В корзину
            </AppButtonPrimary>
          )}

          <div className={style.description}>
            <p>
              Интерактивная квест-экскурсия по набережной Йошкар - Олы раскроет
              тайны 10+ скульптур выдающихся личностей — от основателей Марий Эл
              до культурных героев. Вы станете детективом: разгадывайте загадки,
              находите подсказки и открывайте забытые легенды. Идеально для
              семей, туристов и любителей истории!
            </p>
          </div>
          <Rate allowHalf defaultValue={4.5} />
        </div>

        <Description>
          <DescriptionItem
            label="Продолжительность"
            value="75 - 90"
            units="минут"
          ></DescriptionItem>
          <DescriptionItem
            label="Протяженность"
            value="2,16"
            units="км"
          ></DescriptionItem>
          <DescriptionItem
            label="Способ перемещения"
            type="пешеходная"
          ></DescriptionItem>
        </Description>
      </div>
    </div>
  );
};
