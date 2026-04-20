import { ContentLayout, MainLayout } from "@/components/Layouts";
import { CardSection } from "@/components/Sections/CardSection/CardSection";
import { OfferSection } from "@/components/Sections/OfferSection/OfferSection";
import { SuitsSection } from "@/components/Sections/SuitsSection/SuitsSection";
import { TopSection } from "@/components/Sections/TopSection/TopSection";
import { Section } from "@/widgets/Section";

export const MainPage = () => {
  return (
    <>
      <MainLayout>
        <ContentLayout>
          <TopSection />
          <Section title="Что предлагаем" component={<OfferSection />} />
          <Section component={<CardSection />} />
          <Section title="Кому подойдёт" component={<SuitsSection />} />
        </ContentLayout>
      </MainLayout>
    </>
  );
};
