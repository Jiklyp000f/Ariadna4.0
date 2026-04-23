import { AppButtonPrimary } from "@/shared/ui/button";
import { LogoutOutlined } from "@ant-design/icons";
import { logout, useAuthStore } from "@/store/authStore";
import style from "./styles.module.scss";

interface LoginProps {
  onClick?: () => void;
}

export const Login = ({ onClick }: LoginProps) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <>
      {isAuth ? (
        <div className={style.logout} onClick={logout}>
          <LogoutOutlined />
        </div>
      ) : (
        <AppButtonPrimary onClick={onClick}>Войти/Регистрация</AppButtonPrimary>
      )}
    </>
  );
};
