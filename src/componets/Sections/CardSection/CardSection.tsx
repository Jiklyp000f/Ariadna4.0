import { ProductCard } from "../../Cards/ProductCard"
import style from "./CardSection.module.css"
import type { Event } from "./types"

const eventsArray: Event[] = [
    {
        id: 1,
        img: "https://img.freepik.com/premium-photo/portrait-cute-kitten_1048944-30263764.jpg?semt=ais_hybrid",
        title: "Тайны застывших легенд",
        time: "75 - 90",
        price: 2000,
        disabled: false
    },
    {
        id: 2,
        img: "https://img.freepik.com/premium-photo/portrait-cute-kitten_1048944-30263764.jpg?semt=ais_hybrid",
        title: "Архитектурный облик улицы Советской",
        time: "90",
        price: 2000,
        disabled: false
    },
    {
        id: 3,
        img: "https://img.freepik.com/premium-photo/portrait-cute-kitten_1048944-30263764.jpg?semt=ais_hybrid",
        title: "Тайна Йошкина кота",
        time: null,
        price: null,
        disabled: true
    }
]

export const CardSection = () => {
    return <div className={style.container}>
        {eventsArray.map((event: Event) => {
            return <ProductCard {...event} />
        })}
    </div>
}