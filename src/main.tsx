import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import "antd/dist/reset.css";
import "./main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";

//TODO: модалка, поменять телегу на макс, шрифты, аннотация(небольшое описание карточек товара),
//  поменять лого, навигация увеличить шрифт, уменьшить шрифт перед футером,
//  блок дескриптион увеличить текст, убрать играть через
//сценарий пользователя: гость(предложение войти/зарегистрироваться),
//  режим пользователя(функ корзины, исотрии заказов(интернет магазин))
//футер: уменьшить картинки все!

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
