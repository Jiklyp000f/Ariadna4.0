import style from "./styles.module.scss";
import img1 from "@/assets/image/suitsImg/image1.png";
import img2 from "@/assets/image/suitsImg/image2.png";
import img3 from "@/assets/image/suitsImg/image3.png";
import img4 from "@/assets/image/suitsImg/image4.png";
import img5 from "@/assets/image/suitsImg/image5.png";
import { Title } from "@/shared/ui/Titles";

export const SuitsSection = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.suitsContainer}>
        <img src={img1} alt="Турист" />
        <Title variant="3">Турист</Title>
      </div>
      <div className={style.suitsContainer}>
        <img src={img2} alt="Местным жителям" />
        <Title variant="3">Местным жителям</Title>
      </div>
      <div className={style.suitsContainer}>
        <img src={img3} alt="Семьям с детьми" />
        <Title variant="3">Семьям с детьми</Title>
      </div>
      <div className={style.suitsContainer}>
        <img src={img4} alt="Авторам" />
        <Title variant="3">Авторам</Title>
      </div>
      <div className={style.suitsContainer}>
        <img src={img5} alt="Парам" />
        <Title variant="3">Парам</Title>
      </div>
    </div>
  );
};
