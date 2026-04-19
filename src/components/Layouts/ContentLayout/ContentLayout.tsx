import style from "./ContentLayout.module.css";

type Props = { children: React.ReactNode }

export const ContentLayout: React.FC<Props> = ({ children }) => {
    return <div className={style.contentLayout}>
        {children}
    </div>
}