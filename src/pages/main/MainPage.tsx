import { ContentLayout, MainLayout } from "@/app/layouts";
import { Section } from "@/widgets/Section";
import {
  CardSection,
  OfferSection,
  SuitsSection,
  TopSection,
} from "./sections";

export const MainPage = () => {
  return (
    <>
      <MainLayout>
        <ContentLayout>
          <Section component={<TopSection />} />
          <Section title="Что предлагаем" component={<OfferSection />} />
          <Section title="Квесты" component={<CardSection />} />
          <Section title="Кому подойдёт" component={<SuitsSection />} />
        </ContentLayout>
      </MainLayout>
    </>
  );
};
