import { ContentLayout } from "@/components/Layouts/ContentLayout/ContentLayout";
import { MainLayout } from "@/components/Layouts/MainLayout/MainLayout";
import { BatyshkaSection } from "@/components/Sections/BatyshkaSection/BatyshkaSection";
import { MapSection } from "@/components/Sections/MapSection/MapSection";
import { QRSection } from "@/components/Sections/QRSection/QRSection";
import { ReadySection } from "@/components/Sections/ReadySection/ReadySection";
import { SliderSection } from "@/components/Sections/SliderSection/SliderSection";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header/Header";

export const BatyshkaPage = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <ContentLayout>
          <BatyshkaSection />
          <SliderSection />
          <MapSection />
          <ReadySection />
          <QRSection />
        </ContentLayout>
      </MainLayout>
      <Footer />
    </>
  );
};
