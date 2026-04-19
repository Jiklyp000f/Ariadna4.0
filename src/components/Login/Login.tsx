import { AppButtonPrimary } from "@/shared/ui/button";
import style from "./Login.module.css";

interface LoginProps {
  onClick?: () => void; // объявляем, что компонент может принимать onClick
}

export const Login = ({ onClick }: LoginProps) => {
  return (
    <div className={style.buttonGroup}>
      <AppButtonPrimary onClick={onClick}>Войти/Регистрация</AppButtonPrimary>
    </div>
  );
};
