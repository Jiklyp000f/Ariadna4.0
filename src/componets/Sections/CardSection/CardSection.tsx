import { ProductCard } from "../../Cards/ProductCard"
import style from "./CardSection.module.css"

export const CardSection = () => {
    return <div className={style.container}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
    </div>
}