import { Logo } from "./Logo/Logo";
import style from "./Header.module.css";
import { Navigation } from "./Navigation/Navigation";
import { Login } from "./Login/Login";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useState } from "react";

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
                                    <div className={style.burgerMenu} onClick={(e) => e.stopPropagation()}>
                                          <div className={style.closeBtn} onClick={() => setOpen(false)}>
                                                ✕
                                          </div>
                                          <Logo onClick={() => {
                                                navigate("/");
                                                setOpen(false);
                                          }} />
                                          <Navigation onClick={() => {
                                                navigate("/404");
                                                setOpen(false);
                                          }} />
                                          <Login onClick={() => {
                                                navigate("/404");
                                                setOpen(false);
                                          }} />
                                    </div>
                              </div>
                        )}
                  </>
            );
      }

      return (
            <div className={style.header}>
                  <Logo onClick={() => navigate("/")} />
                  <Navigation onClick={() => {
                        navigate("/404")
                  }} />
                  <Login onClick={() => {
                        navigate("/404");
                  }} />
            </div>
      );
};