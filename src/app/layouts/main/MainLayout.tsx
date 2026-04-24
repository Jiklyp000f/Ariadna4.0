import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer";
import { Fragment } from "react/jsx-runtime";
import { MainLayoutWrapper } from "./MainLayoutWrapper";
import { ScrollToTop } from "../ScrollToTop";

type Props = { children: React.ReactNode };

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <ScrollToTop />
      <MainLayoutWrapper>
        <Header />
        {children}
      </MainLayoutWrapper>
      <Footer />
    </Fragment>
  );
};
