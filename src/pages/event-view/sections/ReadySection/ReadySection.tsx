import style from "./styles.module.scss";
import telephone from "@/assets/image/telephone.png";
import weather from "@/assets/image/weather.png";
import { Title } from "@/shared/ui/titles";

export const ReadySection = () => {
  return (
    <div className={style.readyContentContainer}>
      <div className={style.readyContent}>
        <img src={telephone} alt="" />
        <Title variant="4">Подготовьте оборудование</Title>
      </div>
      <div className={style.readyContent}>
        <img src={weather} alt="" />
        <Title variant="4">Оденьтесь по погоде</Title>
      </div>
    </div>
  );
};
