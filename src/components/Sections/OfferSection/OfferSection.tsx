import { Title } from "../../Titles/Title"
import style from "./OfferSection.module.css"
import img1 from "../../../assets/offerImg/image1.png"
import img2 from "../../../assets/offerImg/image2.png"
import img3 from "../../../assets/offerImg/image3.png"
import img4 from "../../../assets/offerImg/image4.png"

export const OfferSection = () => {
    return <div className={style.wrapper}>
        <Title variant="2">Что предлагаем</Title>
        <div className={style.mainContainer}>
            <div className={style.holderContainer}>
                <img src={img1} alt="" />
                <div className={style.titleContainer}>
                    <Title variant="4">Доступ как с компьютера, так и смартфона</Title>
                </div>
            </div>
            <div className={style.holderContainer}>
                <img src={img2} alt="" />
                <div className={style.titleContainer}>
                    <Title variant="4">Доступные квест-экскурсии</Title>
                </div>
            </div>
            <div className={style.holderContainer}>
                <img src={img3} alt="" />
                <div className={style.titleContainer}>
                    <Title variant="4">Безопасные маршруты</Title>
                </div>
            </div>
            <div className={style.holderContainer}>
                <img src={img4} alt="" />
                <div className={style.titleContainer}>
                    <Title variant="4">Возможность пользоваться в любое время </Title>
                </div>
            </div>
        </div>
    </div>
}