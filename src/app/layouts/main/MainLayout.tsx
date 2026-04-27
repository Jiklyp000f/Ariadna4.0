import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer";
import { MainLayoutWrapper } from "./MainLayoutWrapper";
import { ScrollToTop } from "../ScrollToTop";
import { AuthModal } from "@/features/auth";
import { changeAuthModal, useAuthStore } from "@/store/authStore";
import styles from "./styles.module.scss";

type Props = { children: React.ReactNode };

export const MainLayout: React.FC<Props> = ({ children }) => {
  const isOpenAuth = useAuthStore((state) => state.isAuthModalShow);
  return (
    <div className={styles.wrapper}>
      <ScrollToTop />
      <MainLayoutWrapper>
        <AuthModal open={isOpenAuth} showModal={changeAuthModal} />
        <Header />
        {children}
      </MainLayoutWrapper>
      <Footer />
    </div>
  );
};
