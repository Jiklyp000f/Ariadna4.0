import { Logo } from "./Logo/Logo";
import style from "./Header.module.css";
import { Navigation } from "./Navigation/Navigation";
import { Login } from "./Login/Login";
import { useNavigate } from "react-router-dom";

export const Header = () => {
      const navigate = useNavigate()
      return (
            <div className={style.header}>
                  <Logo onClick={() => { navigate("/") }} />
                  <Navigation />
                  <Login />
            </div>
      );
};