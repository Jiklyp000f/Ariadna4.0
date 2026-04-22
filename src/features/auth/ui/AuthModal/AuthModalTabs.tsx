import { Tabs, type TabsProps } from "antd";
import { RegisterForm } from "../RegisterForm";
import { LoginForm } from "../LoginForm";

type Props = {
  showLoginModal: (open: boolean) => void;
  showRegisterModal: (open: boolean) => void;
};

export const AuthModalTabs: React.FC<Props> = ({ showLoginModal }) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Вход",
      children: <LoginForm showModal={showLoginModal} />,
    },
    {
      key: "2",
      label: "Регистрация",
      children: <RegisterForm showModal={showLoginModal} />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};
