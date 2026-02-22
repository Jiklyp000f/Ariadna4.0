import logoImage from "../../../assets/logo.png";
import style from "./Logo.module.css";

export const Logo = () => {
  return <img src={logoImage} alt="Logo" className={style.logo} />;
};