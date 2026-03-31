import { Logo } from "./Logo/Logo";
import style from "./Header.module.css";
import { Navigation } from "./Navigation/Navigation";
import { Login } from "./Login/Login";

export const Header = () => {
      return (
            <div className={style.header}>
                  <Logo />
                  <Navigation />
                  <Login />
            </div>
      );
};