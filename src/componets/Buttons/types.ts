type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "xl";

export type ButtonOptions = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    onClick: () => void;
};