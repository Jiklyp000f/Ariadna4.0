import { AuthPage, BatyshkaPage, MainPage, NotFoundPage } from "@/pages";

export const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/batyshka",
    element: <BatyshkaPage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
];
