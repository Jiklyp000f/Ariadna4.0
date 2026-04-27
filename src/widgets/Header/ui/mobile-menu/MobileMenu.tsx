import { CloseOutlined } from "@ant-design/icons";
import { Login } from "../login";
import style from "./../../styles.module.scss";
import { Navigation } from "../navigation";
import { changeAuthModal } from "@/store/authStore";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const MobileMenu: React.FC<Props> = ({ open, setOpen }) => {
  if (!open) return null;
  return (
    <div className={style.overlay} onClick={() => setOpen(false)}>
      <div className={style.burgerMenu} onClick={(e) => e.stopPropagation()}>
        <div className={style.close}>
          <CloseOutlined onClick={() => setOpen(false)} />
        </div>

        <Navigation />
        <div className={style.mobileLogin}>
          <Login
            onClick={() => {
              changeAuthModal(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};
