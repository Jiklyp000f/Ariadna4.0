import type { ReactNode } from "react";
import style from "./Form.module.css";

type Props = {
  children: ReactNode;
};

export const Form = ({ children }: Props) => {
  return (
    <form
      className={style.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {children}
    </form>
  );
};
