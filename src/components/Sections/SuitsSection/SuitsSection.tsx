import style from "./SuitsSection.module.css";
import img1 from "@/assets/image/suitsImg/image1.png";
import img2 from "@/assets/image/suitsImg/image2.png";
import img3 from "@/assets/image/suitsImg/image3.png";
import img4 from "@/assets/image/suitsImg/image4.png";
import img5 from "@/assets/image/suitsImg/image5.png";
import { Title } from "@/shared/ui/Titles";

export const SuitsSection = () => {
  return (
    <div className={style.wrapper}>
      <Title variant="2">Кому подойдёт</Title>
      <div className={style.mainContainer}>
        <div className={style.suitsContainer}>
          <img src={img1} alt="turist" />
          <Title variant="3">Турист</Title>
        </div>
        <div className={style.suitsContainer}>
          <img src={img2} alt="village" />
          <Title variant="3">Местным жителям</Title>
        </div>
        <div className={style.suitsContainer}>
          <img src={img3} alt="family" />
          <Title variant="3">Семьям с детьми</Title>
        </div>
        <div className={style.suitsContainer}>
          <img src={img4} alt="authors" />
          <Title variant="3">Авторам</Title>
        </div>
        <div className={style.suitsContainer}>
          <img src={img5} alt="lovers" />
          <Title variant="3">Парам</Title>
        </div>
      </div>
    </div>
  );
};
