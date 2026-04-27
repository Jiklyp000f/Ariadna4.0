import { lazy } from "react";
import { LazyLoad } from "./lazy-load";
import { ErrorBoundaryProvider } from "../providers/ErrorBoundaryProvider";

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

const AboutPage = lazy(() =>
  import("@/pages/about/AboutPage").then((module) => ({
    default: module.AboutPage,
  })),
);

const FAQPage = lazy(() =>
  import("@/pages/faq/FaqPage").then((module) => ({
    default: module.FaqPage,
  })),
);

const withLazyLoad = (
  Component: React.LazyExoticComponent<React.ComponentType>,
) => (
  <LazyLoad>
    <ErrorBoundaryProvider>
      <Component />
    </ErrorBoundaryProvider>
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
    path: "/about",
    element: withLazyLoad(AboutPage),
  },
  {
    path: "/faq",
    element: withLazyLoad(FAQPage),
  },
  {
    path: "*",
    element: withLazyLoad(Page404),
  },
];
