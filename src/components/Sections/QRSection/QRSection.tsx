import { Title } from "@/shared/ui/Titles";
import style from "./styles.module.scss";
import QRImage from "@/assets/image/QR.png";

export const QRSection = () => {
  return (
    <div className={style.qrSection}>
      <Title variant="2">Играем через</Title>
      <div className={style.qrBlock}>
        <img src={QRImage} alt="" />
        <p>Отсканируй QR-код и начни своё приключение</p>
      </div>
    </div>
  );
};
