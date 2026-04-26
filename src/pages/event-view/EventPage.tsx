import { ContentLayout, MainLayout } from "@/app/layouts";

import { Section } from "@/widgets/section";
import {
  MainInfoSection,
  MapSection,
  ReadySection,
  SliderSection,
} from "./sections";
import { AppDivider } from "@/shared/ui/divider";

export const EventPage = () => {
  return (
    <>
      <MainLayout>
        <ContentLayout>
          <Section component={<MainInfoSection />} />
          <AppDivider />
          <SliderSection />
          <AppDivider />
          <Section title="Маршрут Экскурсии" component={<MapSection />} />
          <AppDivider />
          <Section
            title="Не забудьте подготовиться"
            component={<ReadySection />}
          />
        </ContentLayout>
      </MainLayout>
    </>
  );
};
