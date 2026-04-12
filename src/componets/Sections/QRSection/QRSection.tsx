import { Title } from "../../Titles/Title"
import style from "./QRSection.module.css"
import QRImage from "../../../assets/image/QR.png"

export const QRSection = () => {
    return <div className={style.qrSection}>
        <Title variant="2">Играем через</Title>
        <div className={style.qrBlock}>
            <img src={QRImage} alt="" />
            <p>Отсканируй QR-код и начни своё приключение</p>
        </div>
    </div>
}