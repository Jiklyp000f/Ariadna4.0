import { CloseOutlined } from "@ant-design/icons";
import { Navigation } from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { Login } from "../login";
import style from "./../../styles.module.scss";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  changeAuthModal: (open: boolean) => void;
};

export const MobileMenu: React.FC<Props> = ({
  open,
  setOpen,
  changeAuthModal,
}) => {
  const navigate = useNavigate();

  if (!open) return null;
  return (
    <div className={style.overlay} onClick={() => setOpen(false)}>
      <div className={style.burgerMenu} onClick={(e) => e.stopPropagation()}>
        <div className={style.close}>
          <CloseOutlined onClick={() => setOpen(false)} />
        </div>

        <Navigation
          onClick={() => {
            navigate("/404");
            setOpen(false);
          }}
        />
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
