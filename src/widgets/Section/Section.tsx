import { Title } from "@/shared/ui/titles";
import type { Variant } from "@/shared/ui/titles/types";
import styles from "./styles.module.scss";

type Props = {
  title?: string;
  component: React.ReactNode;
  titleVariant?: Variant;
};

export const Section: React.FC<Props> = ({ title, component }) => {
  return (
    <div className={styles.wrapper}>
      {title && (
        <div className={styles.title}>
          <Title variant="2">{title}</Title>
        </div>
      )}

      <div>{component}</div>
    </div>
  );
};
