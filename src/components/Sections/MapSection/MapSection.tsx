import { Title } from "@/shared/ui/Titles";
import style from "./styles.module.scss";
import map from "@/assets/image/map.png";

export const MapSection = () => {
  return (
    <div className={style.mapSection}>
      <Title variant="2">Маршрут Экскурсии</Title>
      <img src={map} alt="map" />
    </div>
  );
};
