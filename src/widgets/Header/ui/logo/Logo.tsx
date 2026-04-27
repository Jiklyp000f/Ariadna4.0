import logoImage from "@/assets/image/logo.jpg";
import style from "./styles.module.css";

type Props = {
  onClick?: () => void;
};

export const Logo: React.FC<Props> = ({ onClick }) => {
  return (
    <img
      src={logoImage}
      alt="Logo"
      className={style.logo}
      onClick={() => {
        onClick?.();
      }}
    />
  );
};
