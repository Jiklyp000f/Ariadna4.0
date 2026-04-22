import { AppButtonPrimary } from "@/shared/ui/button";
import style from "./Login.module.css";
import { useOrderStore } from "@/store/orderStore";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface LoginProps {
  onClick?: () => void;
}

export const Login = ({ onClick }: LoginProps) => {
  const orders = useOrderStore((state) => state.orders);
  return (
    <div className={style.buttonGroup}>
      <div>
        <ShoppingCartOutlined style={{ fontSize: 30 }} />
      </div>

      {orders.length > 0 && <div>Кол-во: {orders.length}</div>}
      <AppButtonPrimary onClick={onClick}>Войти/Регистрация</AppButtonPrimary>
    </div>
  );
};
