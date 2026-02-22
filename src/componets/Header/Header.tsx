import { Logo } from "./Logo/Logo";
import style from "./Header.module.css";
import { Navigation } from "./Navigation/Navigation";


export const Header = () => {
      return <div className={style.header}>
            <Logo />
            <Navigation />
      </div>;

}