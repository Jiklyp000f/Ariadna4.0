type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "xl";

export type ButtonOptions = {
    disabled?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    onClick: () => void;
};