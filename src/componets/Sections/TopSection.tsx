import { Button, ButtonSecondary } from "../Buttons/Button"
import { Title } from "../Titles/Title"
import style from "./TopSection.module.css"


export const TopSection = () => {
    return <div className={style.topSectionContainer}>
        <Title variant={"1"}>Lorem ipsum dolor sit amet consectetur</Title>
        <p>Что то написано мелким шрифтом, чтобы что-то...</p>
        <div className={style.buttonSection}>
            <Button variant="primary" onClick={() => console.log("Primary")} >Нажми меня</Button>
            <ButtonSecondary onClick={() => console.log("Primary")}>Нажми ещё вот тут</ButtonSecondary>
        </div>
    </div>
}