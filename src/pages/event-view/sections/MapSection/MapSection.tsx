import { Map, Placemark, YMaps } from "react-yandex-maps";
import { useRef, useState } from "react";
import { useScreenSize } from "@/shared/lib/useScreenSize";
import styles from "./styles.module.scss";

export const MapSection = () => {
  const coordinates = [56.635635, 47.876881];
  const endPoint = [56.645, 47.885];
  const { isMobile } = useScreenSize();
  const mapRef = useRef<any>(null);
  const [map, setMap] = useState<any>(null);

  // Обработчик загрузки карты
  const handleMapLoad = (mapInstance: any) => {
    mapRef.current = mapInstance;
    setMap(mapInstance);

    // Добавляем линию сразу после загрузки карты
    if (window.ymaps && mapInstance) {
      window.ymaps.ready(() => {
        const line = new window.ymaps.Polyline(
          [coordinates, endPoint],
          {},
          {
            strokeColor: "#26ba7f",
            strokeWidth: 5,
            strokeOpacity: 0.9,
            strokeStyle: "solid",
          },
        );

        mapInstance.geoObjects.add(line);
      });
    }
  };

  return (
    <YMaps>
      <div className={styles.mapSection}>
        <Map
          width={isMobile ? "360px" : "700px"}
          height="400px"
          defaultState={{
            center: coordinates,
            zoom: 16,
          }}
          onLoad={handleMapLoad}
        >
          <Placemark
            geometry={coordinates}
            properties={{
              balloonContentBody: `
                <div style="padding: 8px;">
                  <strong>📍 Адрес:</strong><br />
                  г. Йошкар-Ола<br />
                  ул. Примерная, д. 123
                </div>
              `,
              hintContent: "Узнать адрес",
            }}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          />
          <Placemark
            geometry={endPoint}
            properties={{
              balloonContentBody: `
                <div style="padding: 8px;">
                  <strong>📍 Адрес:</strong><br />
                  г. Йошкар-Ола<br />
                  ул. Конечная, д. 456
                </div>
              `,
              hintContent: "Конечная точка",
            }}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          />
        </Map>
      </div>
    </YMaps>
  );
};
