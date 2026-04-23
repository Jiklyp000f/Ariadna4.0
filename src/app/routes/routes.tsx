import { lazy } from "react";
import { LazyLoad } from "./lazy-load";

const MainPage = lazy(() =>
  import("@/pages/main/MainPage").then((module) => ({
    default: module.MainPage,
  })),
);
const EventPage = lazy(() =>
  import("@/pages/event-view/EventPage").then((module) => ({
    default: module.EventPage,
  })),
);
const Page404 = lazy(() =>
  import("@/pages/404/Page404").then((module) => ({ default: module.Page404 })),
);
const AuthPage = lazy(() =>
  import("@/pages/auth/AuthPage").then((module) => ({
    default: module.AuthPage,
  })),
);

const withLazyLoad = (
  Component: React.LazyExoticComponent<React.ComponentType>,
) => (
  <LazyLoad>
    <Component />
  </LazyLoad>
);

export const routes = [
  {
    path: "/",
    element: withLazyLoad(MainPage),
  },
  {
    path: "/event",
    element: withLazyLoad(EventPage),
  },
  {
    path: "/404",
    element: withLazyLoad(Page404),
  },
  {
    path: "/auth",
    element: withLazyLoad(AuthPage),
  },
];
