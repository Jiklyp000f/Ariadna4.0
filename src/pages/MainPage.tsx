import { ContentLayout } from "@/components/Layouts/ContentLayout/ContentLayout";
import { MainLayout } from "@/components/Layouts/MainLayout/MainLayout";
import { CardSection } from "@/components/Sections/CardSection/CardSection";
import { OfferSection } from "@/components/Sections/OfferSection/OfferSection";
import { SuitsSection } from "@/components/Sections/SuitsSection/SuitsSection";
import { TopSection } from "@/components/Sections/TopSection/TopSection";
import { Footer } from "@/widgets/Footer";

import { Header } from "@/widgets/Header/Header";
import { Section } from "@/widgets/Section";

export const MainPage = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <ContentLayout>
          <TopSection />
          <Section title="Что предлагаем" component={<OfferSection />} />
          <Section component={<CardSection />} />
          <Section title="Кому подойдёт" component={<SuitsSection />} />
        </ContentLayout>
      </MainLayout>
      <Footer />
    </>
  );
};
