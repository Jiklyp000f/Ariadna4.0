import { Map, Placemark, YMaps } from "react-yandex-maps";
import { useEffect, useRef } from "react";
import { useScreenSize } from "@/shared/lib/useScreenSize";
import styles from "./styles.module.scss";

export const MapSection = () => {
  const { isMobile } = useScreenSize();
  const mapRef = useRef<any>(null);

  const points = [
    [56.635635, 47.876881],
    [56.64, 47.88],
    [56.645, 47.885],
  ];

  // Функция расчета расстояния между точками (в километрах)
  const calculateDistance = (point1: number[], point2: number[]) => {
    const R = 6371; // Радиус Земли в км
    const lat1 = (point1[0] * Math.PI) / 180;
    const lat2 = (point2[0] * Math.PI) / 180;
    const deltaLat = ((point2[0] - point1[0]) * Math.PI) / 180;
    const deltaLon = ((point2[1] - point1[1]) * Math.PI) / 180;

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  };

  useEffect(() => {
    if (window.ymaps && mapRef.current) {
      window.ymaps.ready(() => {
        // Добавляем линии между каждой парой точек
        for (let i = 0; i < points.length - 1; i++) {
          const line = new window.ymaps.Polyline(
            [points[i], points[i + 1]],
            {
              balloonContent: `Расстояние: ${calculateDistance(points[i], points[i + 1])} км`,
            },
            {
              strokeColor: "#26ba7f",
              strokeWidth: 4,
              strokeOpacity: 0.8,
            },
          );
          mapRef.current.geoObjects.add(line);
        }
      });
    }
  }, []);

  return (
    <YMaps>
      <div className={styles.mapSection}>
        <Map
          width={isMobile ? "360px" : "700px"}
          height="400px"
          defaultState={{
            center: points[0],
            zoom: 15,
          }}
          instanceRef={(ref) => {
            if (ref) mapRef.current = ref;
          }}
        >
          {points.map((point, index) => (
            <Placemark
              key={index}
              geometry={point}
              properties={{
                balloonContentBody: `
                  <div>
                    <strong>Точка ${index + 1}</strong><br/>
                    Координаты: ${point[0]}, ${point[1]}
                  </div>
                `,
              }}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};
