import style from "./TopSection.module.css";
import img from "@/assets/image/travel_man.png";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { Title } from "@/shared/ui/Titles";

export const TopSection = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className={style.topSectionContainer}>
      <div className={style.leftBlock}>
        <Title variant={isMobile ? "3" : "1"}>АРИАДНА 4.0</Title>
        <p>
          - это сервис, где вы открываете Йошкар-Олу с другой стороны.
          Погрузитесь в захватывающий мир интерактивных иммерсивных экскурсий!
        </p>
      </div>
      <div className={style.rightBlock}>
        <img src={img} alt="картинка" />
      </div>
    </div>
  );
};
