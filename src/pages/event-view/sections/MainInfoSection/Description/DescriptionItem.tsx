import { WarningOutlined } from "@ant-design/icons";
import style from "./styles.module.scss";

interface DescriptionProps {
  label: string;
  value?: string;
  units?: string;
  type?: string;
}

export const DescriptionItem: React.FC<DescriptionProps> = ({
  label,
  value,
  units,
  type,
}) => {
  return (
    <div className={style.item}>
      <span className={style.label}>{label}</span>
      <div className={style.time}>
        {value && <span className={style.value}>{value}</span>}
        {units && <span className={style.units}>{units}</span>}
        {type && (
          <div className={style.typeWrapper}>
            <WarningOutlined />
            <span className={style.type}>{type}</span>
          </div>
        )}
      </div>
    </div>
  );
};
