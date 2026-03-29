import classNames from "classnames";
import style from "./ButtonPrimary.module.css";
import type { ButtonOptions } from "./types";

//TODO СДЕЛАЙ ХОВЕР НА КНОПКИ!!!
type Props = { children: React.ReactNode } & ButtonOptions;


export const Button: React.FC<Props> = ({ children, variant = "primary", size = "md", onClick }) => {
    return <button onClick={onClick} className={classNames(
        style.button,
        {
            [style.buttonPrimary]: variant === "primary",
            [style.buttonSecondary]: variant === "secondary",
            [style.sizeMd]: size === "md",
            [style.sizeXl]: size === "xl"
        }
    )}>{children}</button>
        ;
}

export const ButtonPrimary: React.FC<Omit<Props, "variant">> = ({ children, size = "md", onClick }) => {
    return <Button onClick={onClick} variant="primary" size={size} >{children}</Button>;
}
export const ButtonSecondary: React.FC<Omit<Props, "variant">> = ({ children, size = "md", onClick }) => {
    return <Button onClick={onClick} variant="secondary" size={size} >{children}</Button>;;
}