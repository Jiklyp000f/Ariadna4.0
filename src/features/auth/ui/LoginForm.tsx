import { AppButtonPrimary } from "@/shared/ui/button";
import { Form, Input, type FormProps } from "antd";
import style from "./styles.module.scss";
import { auth } from "@/store/authStore";
import { message } from "antd";

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
  const showErrorMessage = (text: string) => {
    message.error({
      content: text,
      duration: 2,
    });
  };

  const showSuccessMessage = (text: string) => {
    message.success({
      content: text,
      duration: 2,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    showSuccessMessage(`${values.username}, вы успешно вошли!`);
    showModal(false);
    auth();
  };

  const onFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    showErrorMessage(errorInfo.errorFields[0].errors[0]);
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
