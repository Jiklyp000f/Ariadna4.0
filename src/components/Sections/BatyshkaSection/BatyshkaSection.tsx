import style from "./styles.module.scss";
import batyshka from "@/assets/image/batyshka.png";
import { Description } from "../../Description/Description";
import { Title } from "@/shared/ui/Titles";

export const BatyshkaSection = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.leftContainer}>
        <img src={batyshka} alt="" />
        <Description
          label="Продолжительность:"
          value="75 - 90 минут"
        ></Description>
        <Description label="Протяженность (км):" value="2,16 км"></Description>
        <Description
          label="Способ перемещения:"
          value="пешеходная"
        ></Description>
      </div>
      <div className={style.rightContainer}>
        <Title variant="3">
          Квест-экскурсия по скульптурам исторических личностей города
          Йошкар-Олы
        </Title>
        <Title variant="2">«Тайны застывших легенд»</Title>
        <p>
          Интерактивная квест-экскурсия по набережной Йошкар - Олы раскроет
          тайны 10+ скульптур выдающихся личностей — от основателей Марий Эл до
          культурных героев. Вы станете детективом: разгадывайте загадки,
          находите подсказки и открывайте забытые легенды. Идеально для семей,
          туристов и любителей истории!
        </p>
      </div>
    </div>
  );
};
