import style from "./styles.module.scss";

import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useState } from "react";
import { Logo } from "@/componets/Logo/Logo";
import { Navigation } from "@/componets/Navigation/Navigation";
import { Login } from "@/componets/Login/Login";

export const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();
  const [open, setOpen] = useState(false);

  if (isMobile) {
    return (
      <>
        <div className={style.burgerIcon} onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {open && (
          <div className={style.overlay} onClick={() => setOpen(false)}>
            <div
              className={style.burgerMenu}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={style.closeBtn} onClick={() => setOpen(false)}>
                ✕
              </div>
              <Logo
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
              />
              <Navigation
                onClick={() => {
                  navigate("/404");
                  setOpen(false);
                }}
              />
              <Login
                onClick={() => {
                  navigate("/auth");
                  setOpen(false);
                }}
              />
            </div>
          </div>
        )}
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
      <Login
        onClick={() => {
          navigate("/auth");
        }}
      />
    </div>
  );
};
