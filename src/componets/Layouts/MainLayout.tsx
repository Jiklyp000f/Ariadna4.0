import style from "./MainLayout.module.css";

type Props = { children: React.ReactNode }

export const MainLayout: React.FC<Props> = ({ children }) => {
    return <div className={style.mainLayout}>
        {children}
    </div>
}