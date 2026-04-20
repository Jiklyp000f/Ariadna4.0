import { ContentLayout, MainLayout } from "@/app/layouts";
import { Section } from "@/widgets/Section";
import {
  CardSection,
  OfferSection,
  SuitsSection,
  TopSection,
} from "./sections";
import { AppDivider } from "@/shared/ui/divider";

export const MainPage = () => {
  return (
    <>
      <MainLayout>
        <ContentLayout>
          <Section component={<TopSection />} />
          <AppDivider />
          <Section title="Что предлагаем" component={<OfferSection />} />
          <AppDivider />
          <Section component={<CardSection />} />
          <AppDivider />
          <Section title="Кому подойдёт" component={<SuitsSection />} />
        </ContentLayout>
      </MainLayout>
    </>
  );
};
