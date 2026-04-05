import logoImage from "../../../assets/image/logo.svg";
import style from "./Logo.module.css";

type Props = {
  onClick?: () => void
}

export const Logo: React.FC<Props> = ({ onClick }) => {
  return <img src={logoImage} alt="Logo" className={style.logo} onClick={() => { onClick?.() }} />;
};