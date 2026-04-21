import { AuthPage, EventPage, MainPage, Page404 } from "@/pages";

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
    element: <Page404 />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
];
