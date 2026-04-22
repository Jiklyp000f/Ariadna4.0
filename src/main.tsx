import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
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
 * - Создать 2 состояния пользователя и скрывать элементы
 * - Продумать логику корзины
 * - Про историю заказов это они серьезно?
 * - Переделать шапку на мобилку
 * - Проверить адаптивку
 * - Какой логотип?
 * - Шрифты какие?
 * - Разобраться со скоролом страницы при роутинге
 * - Решить проблемы с secondary button
 */

/*****************************************************/

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
);
