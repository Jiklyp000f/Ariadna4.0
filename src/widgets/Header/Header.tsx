import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useScreenSize } from "@/shared/lib/useScreenSize";
import { Cart } from "./ui/cart";
import { OrderModal } from "./ui/order-modal";
import { MenuOutlined } from "@ant-design/icons";
import { Logo } from "./ui/logo";
import { Navigation } from "./ui/navigation";
import { Login } from "./ui/login";
import { MobileMenu } from "./ui/mobile-menu";
import style from "./styles.module.scss";
import { changeAuthModal } from "@/store/authStore";

export const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();
  const [open, setOpen] = useState(false);
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

        <MobileMenu open={open} setOpen={setOpen} />
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
        <Login onClick={() => changeAuthModal(true)} />
      </div>

      <OrderModal open={isOpenOrder} showModal={changeOrderModal} />
    </div>
  );
};
