import { useState } from "react"
import { useScreenSize } from "../../../hooks/useScreenSize"
import style from "./Navigation.module.css"
import { NavigationItem } from "./NavigationItem/NavigationItem"

const menuItems = [
    { id: 1, text: "Привет" },
    { id: 2, text: "Мир!" },
    { id: 3, text: "Мы" },
    { id: 4, text: "Тестируем" },
    { id: 5, text: "Сайт" }
]
//вот тут бургер разбери!
export const Navigation = () => {
    // const { isMobile } = useScreenSize()
    // const [open, setOpen] = useState(false)
    // if (isMobile) {
    //     return <>
    //         <div style={{
    //             position: "absolute",
    //             top: "30px",
    //             right: 30,
    //             border: "3px solid red"
    //         }} onClick={() => { setOpen(true) }}>
    //             berger
    //         </div>
    //         {open && <div
    //             style={{
    //                 position: "fixed",
    //                 top: 0,
    //                 right: 0,
    //                 left: 0,
    //                 bottom: 0,
    //                 background: "red"
    //             }} onClick={() => { setOpen(false) }}>

    //         </div>}
    //     </>
    // }
    return <nav>
        <ul className={style.list}>
            {menuItems.map(({ text, id }) => <NavigationItem key={id}>{text}</NavigationItem>)}
        </ul>
    </nav>
}