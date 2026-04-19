import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import { ContentLayout } from "../../Layouts/ContentLayout/ContentLayout";
import { MainLayout } from "../../Layouts/MainLayout/MainLayout";
import { BatyshkaSection } from "../../Sections/BatyshkaSection/BatyshkaSection";
import { MapSection } from "../../Sections/MapSection/MapSection";
import { QRSection } from "../../Sections/QRSection/QRSection";
import { ReadySection } from "../../Sections/ReadySection/ReadySection";
import { SliderSection } from "../../Sections/SliderSection/SliderSection";

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
