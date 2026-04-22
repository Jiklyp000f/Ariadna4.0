import { Tabs, type TabsProps } from "antd";
import { RegisterForm } from "../RegisterForm";
import { LoginForm } from "../LoginForm";

type Props = {
  showModal: (open: boolean) => void;
};

export const AuthModalTabs: React.FC<Props> = ({ showModal }) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Вход",
      children: <LoginForm showModal={showModal} />,
    },
    {
      key: "2",
      label: "Регистрация",
      children: <RegisterForm showModal={showModal} />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};
