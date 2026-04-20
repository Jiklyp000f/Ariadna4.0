import style from "./styles.module.scss";

type Props = {
  children?: React.ReactNode;
};

export const Description: React.FC<Props> = ({ children }) => {
  return <div className={style.description}>{children}</div>;
};
