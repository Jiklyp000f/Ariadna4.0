import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer";
import { Fragment } from "react/jsx-runtime";
import { MainLayoutWrapper } from "./MainLayoutWrapper";

type Props = { children: React.ReactNode };

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <MainLayoutWrapper>
        <Header />
        {children}
      </MainLayoutWrapper>
      <Footer />
    </Fragment>
  );
};
