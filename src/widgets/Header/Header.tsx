import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Login } from "@/widgets/Header/ui/login";
import { Logo } from "@/components/Logo";
import { useScreenSize } from "@/shared/lib/useScreenSize";
import { AuthModal } from "@/features/auth";
import { Cart } from "./ui/cart";
import { OrderModal } from "./ui/order-modal";
import style from "./styles.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import { MobileMenu } from "./ui/mobile-menu/MobileMenu";

export const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();
  const [open, setOpen] = useState(false);
  const [isOpenAuth, changeAuthModal] = useState(false);
  const [isOpenOrder, changeOrderModal] = useState(false);

  if (isMobile) {
    return (
      <>
        <div className={style.menu}>
          <span>Logo</span>
          <div className={style.actions}>
            <Cart onClick={() => changeOrderModal(true)} />
            <MenuOutlined
              className={style.burger}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        <MobileMenu
          open={open}
          setOpen={setOpen}
          changeAuthModal={changeAuthModal}
        />

        <AuthModal open={isOpenAuth} showModal={changeAuthModal} />
        <OrderModal open={isOpenOrder} showModal={changeOrderModal} />
      </>
    );
  }

  return (
    <div className={style.header}>
      <Logo onClick={() => navigate("/")} />
      <Navigation
        onClick={() => {
          navigate("/404");
        }}
      />
      <div className={style.actions}>
        <Cart onClick={() => changeOrderModal(true)} />
        <Login
          onClick={() => {
            changeAuthModal(true);
          }}
        />
      </div>

      <AuthModal open={isOpenAuth} showModal={changeAuthModal} />
      <OrderModal open={isOpenOrder} showModal={changeOrderModal} />
    </div>
  );
};
