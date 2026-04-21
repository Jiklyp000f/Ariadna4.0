import style from "./styles.module.scss";
import img1 from "@/assets/offerImg/image1.png";
import img2 from "@/assets/offerImg/image2.png";
import img3 from "@/assets/offerImg/image3.png";
import img4 from "@/assets/offerImg/image4.png";

export const OfferSection = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.holderContainer}>
        <img src={img1} alt="" />
        <div className={style.titleContainer}>
          <p className={style.description}>
            Доступ как с компьютера, так и смартфона
          </p>
        </div>
      </div>
      <div className={style.holderContainer}>
        <img src={img2} alt="" />
        <div className={style.titleContainer}>
          <p className={style.description}>Доступные квест-экскурсии</p>
        </div>
      </div>
      <div className={style.holderContainer}>
        <img src={img3} alt="" />
        <div className={style.titleContainer}>
          <p className={style.description}>Безопасные маршруты</p>
        </div>
      </div>
      <div className={style.holderContainer}>
        <img src={img4} alt="" />
        <div className={style.titleContainer}>
          <p className={style.description}>
            Возможность пользоваться в любое время
          </p>
        </div>
      </div>
    </div>
  );
};
