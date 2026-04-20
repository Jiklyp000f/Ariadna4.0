import { AuthPage, EventPage, MainPage, NotFoundPage } from "@/pages";

export const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/event",
    element: <EventPage />,
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
