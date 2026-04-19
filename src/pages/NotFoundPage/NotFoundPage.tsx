import { useNavigate } from "react-router-dom";
import style from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className={style.notFound}>
            <h1 className={style.code}>404</h1>
            <h2 className={style.title}>Страница не найдена</h2>
            <p className={style.message}>
                Извините, страница, которую вы ищете, не существует или была перемещена.
            </p>
            <button className={style.button} onClick={() => navigate("/")}>
                Вернуться на главную
            </button>
        </div>
    );
};