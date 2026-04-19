import { AuthPage } from "../../componets/Pages/AuthPage/AuthPage";
import { BatyshkaPage } from "../../componets/Pages/BatyshkaPage/BatyshkaPage";
import { MainPage } from "../../componets/Pages/MainPage/MainPage";
import { NotFoundPage } from "../../componets/Pages/NotFoundPage/NotFoundPage";

export const routes = [
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
    {
        path: "/auth",
        element: <AuthPage />
    }
]

