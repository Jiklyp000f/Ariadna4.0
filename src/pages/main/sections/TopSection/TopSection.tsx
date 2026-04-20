import style from "./styles.module.scss";
import img from "@/assets/image/travel_man.png";
import { useScreenSize } from "@/shared/lib/useScreenSize";
import { Title } from "@/shared/ui/Titles";

export const TopSection = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className={style.topSectionContainer}>
      <div className={style.leftBlock}>
        <Title variant={isMobile ? "3" : "1"}>АРИАДНА 4.0</Title>
        <div>
          <p>
            &mdash; это сервис, где вы открываете Йошкар-Олу с другой стороны.
          </p>
          <p>
            Погрузитесь в захватывающий мир интерактивных иммерсивных экскурсий!
          </p>
        </div>
      </div>
      <div className={style.rightBlock}>
        <img src={img} alt="картинка" />
      </div>
    </div>
  );
};
