import { Button } from "../Buttons/Button"
import type { Event } from "../Sections/CardSection/types"
import { Title } from "../Titles/Title"
import style from "./ProductCard.module.css"


export const ProductCard = ({ img, price, time, title, disabled }: Event) => {
    return <div className={style.productCard} style={{ opacity: disabled ? 0.75 : 1 }}>
        <img src={img} alt="img" />
        <div className={style.titleContainer}>
            <Title variant="4">{title}</Title>
        </div>
        {time ? <p>{time} минут</p> : null}
        {price ? <p>{price}  ₽</p> : null}
        <div className={style.button}>
            <Button disabled={disabled} onClick={() => console.log("нажал")}>{disabled ? "В разработке" : "Сыграть"}</Button>
        </div>
    </div>
}