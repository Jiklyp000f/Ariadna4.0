import style from "./Description.module.css"

interface DescriptionProps {
    label: string;
    value: string;
}

export const Description = ({ label, value }: DescriptionProps) => {
    return (
        <div className={style.description}>
            <span className={style.label}>{label}</span>
            <span className={style.value}>{value}</span>
        </div>
    )
}