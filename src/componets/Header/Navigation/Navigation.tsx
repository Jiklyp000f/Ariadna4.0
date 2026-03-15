import style from "./Navigation.module.css"
import { NavigationItem } from "./NavigationItem/NavigationItem"

const menuItems = [
    { id: 1, text: "Привет" },
    { id: 2, text: "Мир!" },
    { id: 3, text: "Мы" },
    { id: 4, text: "Тестируем" },
    { id: 5, text: "Сайт" }
]

export const Navigation = () => {
    return <nav>
        <ul className={style.list}>
            {menuItems.map(({ text, id }) => <NavigationItem key={id}>{text}</NavigationItem>)}
        </ul>
    </nav>
}