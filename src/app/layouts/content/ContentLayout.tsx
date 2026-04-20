import style from "./styles.module.scss";

type Props = { children: React.ReactNode };

export const ContentLayout: React.FC<Props> = ({ children }) => {
  return <div className={style.contentLayout}>{children}</div>;
};
