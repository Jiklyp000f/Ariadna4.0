import { useOrderStore } from "@/store/orderStore";
import { ShoppingCartOutlined } from "@ant-design/icons";
import style from "./styles.module.scss";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import { OrderModal } from "../order-modal";

export const Cart = () => {
  const orders = useOrderStore((state) => state.orders);
  const isAuth = useAuthStore((state) => state.isAuth);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    console.log("closeModal called, isModalOpen before:", isModalOpen);
    setIsModalOpen(false);
    console.log("closeModal called, isModalOpen after:", isModalOpen);
  };

  if (!isAuth) return null;

  return (
    <div className={style.cart} onClick={openModal}>
      <ShoppingCartOutlined style={{ fontSize: 30 }} />
      <div>кол-во: {orders.length}</div>
      <OrderModal open={isModalOpen} onClose={closeModal} />
    </div>
  );
};
