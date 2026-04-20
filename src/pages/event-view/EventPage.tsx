import { ContentLayout, MainLayout } from "@/app/layouts";

import { Section } from "@/widgets/Section";
import {
  MainInfoSection,
  MapSection,
  QRSection,
  ReadySection,
  SliderSection,
} from "./sections";

export const EventPage = () => {
  return (
    <>
      <MainLayout>
        <ContentLayout>
          <Section component={<MainInfoSection />} />
          <SliderSection />
          <Section title="Маршрут Экскурсии" component={<MapSection />} />
          <Section
            title="Не забудьте подготовиться"
            component={<ReadySection />}
          />
          <Section title="Играем через" component={<QRSection />} />
        </ContentLayout>
      </MainLayout>
    </>
  );
};
