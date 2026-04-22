import { Modal } from "antd";
import style from "./styles.module.scss";
import { AuthModalTabs } from "./AuthModalTabs";

type Props = {
  open: boolean;
  showModal: (open: boolean) => void;
};

export const AuthModal: React.FC<Props> = ({ open, showModal }) => {
  return (
    <Modal
      open={open}
      onOk={() => showModal(false)}
      onCancel={() => showModal(false)}
      footer={null}
      width={{
        xs: "90%",
        md: "70%",
        lg: "50%",
        xl: "40%",
      }}
    >
      <div className={style.form}>
        <AuthModalTabs showLoginModal={showModal} />
      </div>
    </Modal>
  );
};
