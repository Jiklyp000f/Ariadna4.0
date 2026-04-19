import { ContentLayout } from "@/components/Layouts/ContentLayout/ContentLayout";
import { MainLayout } from "@/components/Layouts/MainLayout/MainLayout";
import { CardSection } from "@/components/Sections/CardSection/CardSection";
import { OfferSection } from "@/components/Sections/OfferSection/OfferSection";
import { SuitsSection } from "@/components/Sections/SuitsSection/SuitsSection";
import { Footer } from "@/widgets/Footer";

import { Header } from "@/widgets/Header/Header";
import { Section } from "@/widgets/Section";

export const MainPage = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <ContentLayout>
          {/* <TopSection /> */}
          <Section title="Оферта" component={<OfferSection />} />
          <OfferSection />
          <CardSection />
          <SuitsSection />
        </ContentLayout>
      </MainLayout>
      <Footer />
    </>
  );
};
