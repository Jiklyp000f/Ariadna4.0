import style from "./Navigation.module.css"

export const Navigation = () => {
    return <nav>
        <ul className={style.list}>
            <li><span>link1</span></li>
            <li><span>link2</span></li>
            <li><span>link3</span></li>
            <li><span>link4</span></li>
            <li><span>link5</span></li>
        </ul>

    </nav>
}