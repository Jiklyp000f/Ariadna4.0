import style from "./styles.module.scss";
import QRImage from "@/assets/image/QR.png";

export const QRSection = () => {
  return (
    <div className={style.qrBlock}>
      <img src={QRImage} alt="" />
      <p>Отсканируй QR-код и начни своё приключение</p>
    </div>
  );
};
