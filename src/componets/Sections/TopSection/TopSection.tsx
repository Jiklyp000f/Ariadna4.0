import { Button, ButtonSecondary } from "../../Buttons/Button"
import { Title } from "../../Titles/Title"
import style from "./TopSection.module.css"
import img from "../../../assets/image/right-hand.png"
import { useScreenSize } from "../../../hooks/useScreenSize"


export const TopSection = () => {
    const { isMobile } = useScreenSize()
    return <div className={style.topSectionContainer}>
        <div className={style.leftBlock}>
            <Title variant={isMobile ? "3" : "1"}>Lorem ipsum dolor sit amet consectetur</Title>
            <p>Что то написано мелким шрифтом, чтобы что-то...</p>
            <div className={style.buttonSection}>
                <Button size={isMobile ? "md" : "xl"} variant="primary" onClick={() => console.log("Primary")} >Нажми меня</Button>
                <ButtonSecondary size={isMobile ? "md" : "xl"} onClick={() => console.log("Primary")}>Нажми ещё вот тут</ButtonSecondary>
            </div>
        </div>
        <div className={style.rightBlock}>
            <img src={img} alt="картинка" />
        </div>
    </div>
}