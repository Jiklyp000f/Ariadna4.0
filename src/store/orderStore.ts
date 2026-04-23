import { create } from "zustand";
import { persist } from "zustand/middleware";
import { message, notification } from "antd";

export type Order = {
  id: number;
  title: string;
  description: string;
  rating: number | null;
  price: number | null;
};

type State = {
  orders: Order[];
};

type Actions = {
  addToOrder: (order: Order) => void;
  removeFromOrder: (id: number) => void;
  clearOrder: () => void;
};

export const useOrderStore = create<State & Actions>()(
  persist(
    (set) => ({
      orders: [],
      addToOrder: (order: Order) => {
        // const existingOrder = get().orders.find((item) => item.id === order.id);

        // if (existingOrder) {
        //   notification.warning({
        //     message: "Товар уже в корзине",
        //     description: `${order.title} уже добавлен в ваш заказ`,
        //     placement: "bottomRight",
        //     duration: 1,
        //   });
        //   return;
        // }

        set((state) => ({ orders: [...state.orders, order] }));

        message.success({
          content: `${order.title} успешно добавлен в корзину`,
          duration: 1,
        });
      },
      removeFromOrder: (id: number) => {
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== id),
        }));

        notification.info({
          message: "Товар удален",
          description: "Товар успешно удален из корзины",
          placement: "topRight",
          duration: 2,
        });
      },
      clearOrder: () => {
        set({ orders: [] });
        message.success({
          content: `Заказ оформлен!`,
          duration: 1,
        });
      },
    }),
    {
      name: "order-storage",
    },
  ),
);

export const addToOrder = (order: Order) => {
  return useOrderStore.getState().addToOrder(order);
};

export const removeFromOrder = (id: number) => {
  useOrderStore.getState().removeFromOrder(id);
};

export const clearOrder = () => {
  useOrderStore.getState().clearOrder();
};
