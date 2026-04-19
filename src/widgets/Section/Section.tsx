import { Title } from "@/shared/ui/Titles";
import styles from "./styles.module.scss";
import type { Variant } from "@/shared/ui/Titles/types";

type Props = {
  title?: string;
  component: React.ReactNode;
  titleVariant?: Variant;
};

export const Section: React.FC<Props> = ({ title, component }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {title && <Title variant="2">{title}</Title>}
        {component}
      </div>
    </div>
  );
};
