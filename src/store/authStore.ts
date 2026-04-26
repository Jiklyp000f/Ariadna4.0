import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  isAuth: boolean;
  isAuthModalShow: boolean;
};

type Actions = {
  auth: () => void;
  logout: () => void;
  changeAuthModal: (event: boolean) => void;
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      isAuth: false,
      isAuthModalShow: false,
      auth: () => set(() => ({ isAuth: true })),
      logout: () => set(() => ({ isAuth: false })),
      changeAuthModal: (event) => set(() => ({ isAuthModalShow: event })),
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

export const changeAuthModal = (event: boolean) => {
  useAuthStore.getState().changeAuthModal(event);
};
