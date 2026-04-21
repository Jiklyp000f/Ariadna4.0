import { useNavigate } from "react-router-dom";
import style from "./styles.module.scss";
import { AppButtonPrimary } from "@/shared/ui/button";

export const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className={style.wrapper}>
      <h1 className={style.code}>404</h1>
      <h2 className={style.title}>Страница не найдена</h2>
      <p className={style.message}>
        Извините, страница, которую вы ищете, не существует или была перемещена.
      </p>
      <AppButtonPrimary onClick={() => navigate("/")}>
        Вернуться на главную
      </AppButtonPrimary>
    </div>
  );
};
