import { useOrderStore } from "@/store/orderStore";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/store/authStore";
import style from "./styles.module.scss";

interface LoginProps {
  onClick?: () => void;
}

export const Cart: React.FC<LoginProps> = ({ onClick }) => {
  const orders = useOrderStore((state) => state.orders);
  const isAuth = useAuthStore((state) => state.isAuth);

  if (!isAuth) return null;

  return (
    <div className={style.cart} onClick={onClick}>
      <ShoppingCartOutlined style={{ fontSize: 30 }} />
      <div>кол-во: {orders.length}</div>
    </div>
  );
};
