import { useOrderStore } from "@/store/orderStore";
import { Modal } from "antd";
import styles from "./styles.module.scss";
import { AppButtonPrimary } from "@/shared/ui/button";

interface Props {
  open: boolean;
  showModal: (open: boolean) => void;
}

export const OrderModal: React.FC<Props> = ({ open, showModal }) => {
  const orders = useOrderStore((state) => state.orders);
  const clearOrder = useOrderStore((state) => state.clearOrder);

  const handleClose = () => {
    showModal(false);
  };

  const handleOrderSubmit = () => {
    clearOrder();
    showModal(false);
  };

  return (
    <Modal
      open={open}
      onOk={handleClose}
      onCancel={handleClose}
      closable={true}
      footer={null}
      width={{
        xs: "90%",
        md: "70%",
        lg: "50%",
        xl: "40%",
      }}
    >
      <div className={styles.wrapper}>
        {orders.length > 0 ? (
          <div className={styles.content}>
            <ul className={styles.list}>
              {orders?.map((item, index) => (
                <li className={styles.item} key={index}>
                  <span className={styles.itemName}>{item.title}</span>
                  <span className={styles.itemPrice}>{item.price} ₽</span>
                </li>
              ))}
            </ul>

            <div className={styles.order}>
              <div className={styles.orderTotal}>
                <span>Итого: </span>
                <span className={styles.orderPrice}>
                  {orders?.reduce((acc, item) => {
                    if (item.price === null) return acc;
                    return acc + item.price;
                  }, 0)}{" "}
                  ₽
                </span>
              </div>

              <AppButtonPrimary onClick={handleOrderSubmit}>
                Оформить заказ
              </AppButtonPrimary>
            </div>
          </div>
        ) : (
          <div className={styles.empty}>В корзине нет товаров</div>
        )}
      </div>
    </Modal>
  );
};
