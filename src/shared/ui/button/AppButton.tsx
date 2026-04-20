import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { ButtonProps } from "antd/lib";
import cn from "classnames";
import { forwardRef } from "react";
import styles from "./styles.module.scss";

type Props = ButtonProps & { wide?: boolean };

type AppButtonDefaultProps = Omit<Props, "wide">;

const withWide = (style: string, wide?: boolean, className?: string) => {
  return cn(style, className, { [styles.buttonWide]: wide });
};

const primary = styles.buttonPrimary;
const secondary = styles.buttonSecondary;
const text = styles.buttonText;
const onlyIcon = styles.buttonIcon;

const AppButtonDefault = forwardRef<HTMLButtonElement, AppButtonDefaultProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button {...props} ref={ref}>
        {children}
      </Button>
    );
  },
);

export const AppButtonPrimary = forwardRef<
  HTMLButtonElement,
  Omit<Props, "type">
>(
  (
    { children, wide = false, htmlType = "submit", className, ...props },
    ref,
  ) => (
    <AppButtonDefault
      ref={ref}
      htmlType={htmlType}
      className={withWide(primary, wide, className)}
      {...props}
      type="primary"
    >
      {children}
    </AppButtonDefault>
  ),
);

export const AppButtonSecondary = forwardRef<
  HTMLButtonElement,
  Omit<Props, "type">
>(({ children, wide = false, className, ...props }, ref) => (
  <AppButtonDefault
    ref={ref}
    {...props}
    className={withWide(secondary, wide, className)}
    type="default"
  >
    {children}
  </AppButtonDefault>
));

export const AppButtonText = forwardRef<HTMLButtonElement, Omit<Props, "type">>(
  ({ children, wide = false, className, ...props }, ref) => (
    <AppButtonDefault
      ref={ref}
      {...props}
      className={withWide(text, wide, className)}
      type="text"
    >
      {children}
    </AppButtonDefault>
  ),
);

export const AppButtonIcon = forwardRef<HTMLButtonElement, Omit<Props, "type">>(
  ({ children, wide = false, className, icon, ...props }, ref) => (
    <AppButtonDefault
      ref={ref}
      {...props}
      className={withWide(onlyIcon, wide, className)}
      type="default"
      icon={icon || <PlusOutlined />}
    >
      {children}
    </AppButtonDefault>
  ),
);

export const AppButtonSave = forwardRef<HTMLButtonElement, Omit<Props, "type">>(
  (
    {
      children = "Сохранить",
      htmlType = "submit",
      wide = false,
      className,
      ...props
    },
    ref,
  ) => (
    <AppButtonPrimary
      ref={ref}
      htmlType={htmlType}
      className={withWide(primary, wide, className)}
      {...props}
    >
      {children}
    </AppButtonPrimary>
  ),
);

export const AppButtonCancel = forwardRef<
  HTMLButtonElement,
  Omit<Props, "type">
>(({ children = "Отменить", wide = false, className, ...props }, ref) => (
  <AppButtonSecondary
    ref={ref}
    className={withWide(secondary, wide, className)}
    {...props}
  >
    {children}
  </AppButtonSecondary>
));
