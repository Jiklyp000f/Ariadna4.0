import { Title } from "../../Titles/Title"
import style from "./ReadySection.module.css"
import telephone from "../../../assets/image/telephone.png"
import weather from "../../../assets/image/weather.png"

export const ReadySection = () => {
    return <div className={style.readySection}>
        <Title variant="2">Не забудьте подготовиться</Title>
        <div className={style.readyContentContainer}>
            <div className={style.readyContent}>
                <img src={telephone} alt="" />
                <Title variant="4">Подготовьте оборудование</Title>
            </div>
            <div className={style.readyContent}>
                <img src={weather} alt="" />
                <Title variant="4">Оденьтесь по погоде</Title>
            </div>
        </div>
    </div>
}