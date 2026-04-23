import img from "@/assets/image/topSection/orig.webp";
import { useScreenSize } from "@/shared/lib/useScreenSize";
import { Title } from "@/shared/ui/Titles";
import style from "./styles.module.scss";

export const TopSection = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className={style.wrapper}>
      <div className={style.leftBlock}>
        <Title variant={isMobile ? "3" : "1"}>АРИАДНА 4.0</Title>
        <div>
          <div className={style.description}>
            <p>Сервис, где вы открываете Йошкар-Олу с другой стороны.</p>
            <p>
              Погрузитесь в захватывающий мир интерактивных иммерсивных
              экскурсий!
            </p>
          </div>
          <ul className={style.list}>
            <li>Формат квеста</li>
            <li>Уникальные кадры</li>
            <li>Для всех возрастов</li>
            <li>Город с новой стороны</li>
          </ul>
        </div>
      </div>
      <div className={style.rightBlock}>
        <img src={img} alt="картинка" />
      </div>
      <div className={style.redBall}></div>
      <div className={style.orangeBall}></div>
      <div className={style.blueBall}></div>
    </div>
  );
};
