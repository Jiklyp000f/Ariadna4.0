import { Title } from "../../Titles/Title";
import style from "./Input.module.css";

type Props = {
  type: InputType;
  label?: string;
  value: string;
  onChange: (event: any) => void;
};

type InputType = "text" | "password" | "checkbox" | "email";

export const Input: React.FC<Props> = ({ type, label, value, onChange }) => {
  return (
    <div className={style.wrapper}>
      {label && <Title variant="4">{label}</Title>}
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};
