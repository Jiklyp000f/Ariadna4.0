import logoImage from "../../../assets/image/logo.svg";
import style from "./Logo.module.css";

export const Logo = () => {
  return <img src={logoImage} alt="Logo" className={style.logo} />;
};