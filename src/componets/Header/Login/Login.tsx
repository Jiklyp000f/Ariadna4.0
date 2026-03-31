import { Button, ButtonSecondary } from "../../Buttons/Button"
import style from "./Login.module.css"

export const Login = () => {
    return <div className={style.buttonGroup}>
        <Button onClick={() => console.log("Primary")} size="xl">
            Primary
        </Button>
        <ButtonSecondary onClick={() => console.log("Secondary")} size="xl">
            Secondary
        </ButtonSecondary>
    </div>
}