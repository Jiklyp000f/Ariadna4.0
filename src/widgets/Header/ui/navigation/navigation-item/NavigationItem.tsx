import type { ReactNode } from "react";
import style from "./styles.module.scss";
import type { NavigationLinkProps } from "../types";

type Props = { children: ReactNode } & NavigationLinkProps;

export const NavigationItem = ({ children, ...props }: Props) => {
  return (
    <li>
      <a className={style.navItem} {...props}>
        {children}
      </a>
    </li>
  );
};
