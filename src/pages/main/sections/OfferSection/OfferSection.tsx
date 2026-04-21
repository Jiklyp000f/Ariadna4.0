import style from "./styles.module.scss";
import img1 from "@/assets/offerImg/image1.png";
import img2 from "@/assets/offerImg/image2.png";
import img3 from "@/assets/offerImg/image3.png";
import img4 from "@/assets/offerImg/image4.png";
import classNames from "classnames";

export const OfferSection = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.block}>
        <div className={classNames(style.round, style.first)}>
          <div className={style.imgWrapper}>
            <img src={img1} alt="" />
          </div>
        </div>
        <p className={style.description}>
          Доступ как с компьютера, так и смартфона
        </p>
      </div>
      <div className={style.block}>
        <div className={classNames(style.round, style.second)}>
          <div className={style.imgWrapper}>
            <img src={img2} alt="" />
          </div>
        </div>
        <p className={style.description}>Доступные квест-экскурсии</p>
      </div>

      <div className={style.block}>
        <div className={classNames(style.round, style.third)}>
          <div className={style.imgWrapper}>
            <img src={img3} alt="" />
          </div>
        </div>
        <p className={style.description}>Безопасные маршруты</p>
      </div>

      <div className={style.block}>
        <div className={classNames(style.round, style.fourth)}>
          <div className={style.imgWrapper}>
            <img src={img4} alt="" />
          </div>
        </div>
        <p className={style.description}>
          Возможность пользоваться в любое время
        </p>
      </div>
    </div>
  );
};
