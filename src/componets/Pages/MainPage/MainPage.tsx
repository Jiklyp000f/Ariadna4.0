import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import { ContentLayout } from "../../Layouts/ContentLayout/ContentLayout";
import { MainLayout } from "../../Layouts/MainLayout/MainLayout";
import { CardSection } from "../../Sections/CardSection/CardSection";
import { OfferSection } from "../../Sections/OfferSection/OfferSection";
import { SuitsSection } from "../../Sections/SuitsSection/SuitsSection";
import { TopSection } from "../../Sections/TopSection/TopSection";

export const MainPage = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <ContentLayout>
          <TopSection />
          <OfferSection />
          <CardSection />
          <SuitsSection />
        </ContentLayout>
      </MainLayout>
      <Footer />
    </>
  );
};
