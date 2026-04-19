import { ButtonSecondary } from "../../Buttons/Button"
import style from "./Login.module.css"

interface LoginProps {
    onClick?: () => void;  // объявляем, что компонент может принимать onClick
}

export const Login = ({ onClick }: LoginProps) => {
    return <div className={style.buttonGroup}>
        <ButtonSecondary onClick={onClick} size="xl">
            Войти/Регистрация
        </ButtonSecondary>
    </div>
}