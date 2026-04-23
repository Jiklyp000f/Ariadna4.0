import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  isAuth: boolean;
};

type Actions = {
  auth: () => void;
  logout: () => void;
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      isAuth: false,
      auth: () => set(() => ({ isAuth: true })),
      logout: () => set(() => ({ isAuth: false })),
    }),
    {
      name: "auth-storage",
    },
  ),
);

export const auth = () => {
  useAuthStore.getState().auth();
};

export const logout = () => {
  useAuthStore.getState().logout();
};
