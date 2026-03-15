import type { ReactNode } from "react"
import type { TitleOptions, Variant } from "./types"
import style from "./Title.module.css"

type Props = { variant: Variant, children: ReactNode } & TitleOptions

export const Title = ({ variant, children, ...props }: Props) => {
    switch (variant) {
        case "1":
            return <h1 className={style.h1} {...props}>{children}</h1>
        case "2":
            return <h2 className={style.h2} {...props}>{children}</h2>
        case "3":
            return <h3 className={style.h3} {...props}>{children}</h3>
        default:
            const exhaustiveCheck: never = variant;
            console.log(exhaustiveCheck);
    }
}