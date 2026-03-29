import { Button } from "../Buttons/Button"
import { Title } from "../Titles/Title"
import style from "./ProductCard.module.css"
export const ProductCard = () => {
    return <div className={style.productCard}>
        <img src="https://img.freepik.com/premium-photo/portrait-cute-kitten_1048944-30263764.jpg?semt=ais_hybrid" alt="" />
        <Title variant="4">Шаблон</Title>
        <p>ghbdtn</p>
        <p>fbddf</p>
        <p>dsfsf</p>
        <p>2222$</p>
        <Button onClick={() => console.log("нажал")}>КУПИ МЕНЯ!</Button>
    </div>
}