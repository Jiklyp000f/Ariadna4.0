import { AppButtonPrimary } from "@/shared/ui/button";
import { Form, Input, notification, type FormProps } from "antd";
import style from "./styles.module.scss";
import { auth } from "@/store/authStore";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const required = "Поле обязательно для заполнения";
const mailRule = {
  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: "Введите корректный email адрес",
};

type Props = {
  showModal: (open: boolean) => void;
};

export const LoginForm: React.FC<Props> = ({ showModal }) => {
  const [api, contextHolder] = notification.useNotification();

  const openErrorNotification = (message: string) => {
    api.open({
      title: "Ошибка входа",
      type: "error",
      description: message,
      placement: "bottomRight",
      showProgress: true,
      pauseOnHover: true,
      duration: 2,
    });
  };

  const openSuccessNotification = (message: string) => {
    api.open({
      title: "Авторизация",
      type: "success",
      description: message,
      placement: "bottomRight",
      showProgress: true,
      pauseOnHover: true,
      duration: 2,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    openSuccessNotification(`${values.username}, вы успешно вошли!`);
    showModal(false);
    auth();
  };

  const onFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    openErrorNotification(errorInfo.errorFields[0].errors[0]);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFailed}
      autoComplete="off"
      layout="vertical"
      size="large"
    >
      {contextHolder}
      <Form.Item<FieldType>
        label="Email"
        name="username"
        rules={[{ required: true, message: required }, mailRule]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Пароль"
        name="password"
        rules={[{ required: true, message: required }]}
      >
        <Input.Password />
      </Form.Item>

      <div className={style.button}>
        <Form.Item label={null}>
          <AppButtonPrimary style={{ width: 200 }} htmlType="submit">
            Войти
          </AppButtonPrimary>
        </Form.Item>
      </div>
    </Form>
  );
};
