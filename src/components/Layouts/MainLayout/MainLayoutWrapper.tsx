import style from "./styles.module.scss";

type Props = { children: React.ReactNode };

export const MainLayoutWrapper: React.FC<Props> = ({ children }) => {
  return <div className={style.mainLayout}>{children}</div>;
};
