import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import './reset.css'
import './styles/fonts.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NotFoundPage } from './componets/Pages/NotFoundPage/NotFoundPage.tsx';
import { BatyshkaPage } from './componets/Pages/BatyshkaPage/BatyshkaPage.tsx';
import { MainPage } from './componets/Pages/MainPage/MainPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/batyshka",
    element: <BatyshkaPage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
