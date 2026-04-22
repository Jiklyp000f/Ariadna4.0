import { create } from "zustand";
import { persist } from "zustand/middleware";
import { notification } from "antd";

export type Order = {
  id: number;
  title: string;
  description: string;
  rating: number | null;
  price: number | null;
};

type State = {
  bears: number;
  orders: Order[];
};

type Actions = {
  increasePopulation: () => void;
  removeAllBears: () => void;
  addToOrder: (order: Order) => void;
  removeFromOrder: (id: number) => void;
};

export const useOrderStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      bears: 0,
      orders: [],
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      addToOrder: (order: Order) => {
        const existingOrder = get().orders.find((item) => item.id === order.id);

        if (existingOrder) {
          notification.warning({
            message: "Товар уже в корзине",
            description: `${order.title} уже добавлен в ваш заказ`,
            placement: "bottomRight",
            duration: 1,
          });
          return;
        }

        set((state) => ({ orders: [...state.orders, order] }));

        notification.success({
          message: "Товар добавлен",
          description: `${order.title} успешно добавлен в корзину`,
          placement: "bottomRight",
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
    }),
    {
      name: "order-storage",
    },
  ),
);

export const increasePopulation = () => {
  useOrderStore.getState().increasePopulation();
};

export const addToOrder = (order: Order) => {
  return useOrderStore.getState().addToOrder(order);
};

export const removeAllBears = () => {
  useOrderStore.getState().removeAllBears();
};

export const removeFromOrder = (id: number) => {
  useOrderStore.getState().removeFromOrder(id);
};
