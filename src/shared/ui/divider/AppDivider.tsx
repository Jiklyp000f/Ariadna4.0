import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
  size?: "small" | "medium" | "large";
};

export const AppDivider: React.FC<Props> = ({ size = "medium" }) => {
  return <div className={classNames(styles.divider, styles[size])}></div>;
};
