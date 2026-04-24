import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import "./main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";
import { ConfigProvider } from "antd";
import { themeConfig } from "./shared/config";

//TODO: модалка, поменять телегу на макс, шрифты, аннотация(небольшое описание карточек товара),
//  поменять лого, навигация увеличить шрифт, уменьшить шрифт перед футером,
//  блок дескриптион увеличить текст, убрать играть через
//сценарий пользователя: гость(предложение войти/зарегистрироваться),
//  режим пользователя(функ корзины, исотрии заказов(интернет магазин))
//футер: уменьшить картинки все!

/*****************************************************/

// NOTE: JOKERs
/**
 * - Про историю заказов это они серьезно?
 * - Какой логотип?
 * - Шрифты какие?
 * - Добавить ErrorBoundary
 */

/*****************************************************/

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={themeConfig}>
    <RouterProvider router={router} />
  </ConfigProvider>,
);
