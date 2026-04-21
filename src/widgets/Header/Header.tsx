import style from "./styles.module.scss";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Login } from "@/components/Login";
import { Logo } from "@/components/Logo";
import { useScreenSize } from "@/shared/lib/useScreenSize";
import { Checkbox, Form, Input, Modal } from "antd";
import { Title } from "@/shared/ui/Titles";
import { AppButtonPrimary } from "@/shared/ui/button";
import type { FormProps } from "antd/lib";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();
  const [open, setOpen] = useState(false);
  const [modal, showModal] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  if (isMobile) {
    return (
      <>
        <div className={style.burgerIcon} onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {open && (
          <div className={style.overlay} onClick={() => setOpen(false)}>
            <div
              className={style.burgerMenu}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={style.closeBtn} onClick={() => setOpen(false)}>
                ✕
              </div>
              <Logo
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
              />
              <Navigation
                onClick={() => {
                  navigate("/404");
                  setOpen(false);
                }}
              />
              <Login
                onClick={() => {
                  navigate("/auth");
                  setOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className={style.header}>
      <Logo onClick={() => navigate("/")} />
      <Navigation
        onClick={() => {
          navigate("/404");
        }}
      />
      <Login
        onClick={() => {
          showModal(true);
        }}
      />

      <Modal
        title={<Title variant="3">Авторизация</Title>}
        open={modal}
        onOk={() => showModal(false)}
        onCancel={() => showModal(false)}
        footer={null}
        width={{
          xs: "90%",
          md: "70%",
          lg: "60%",
          xl: "50%",
        }}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            label={null}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <AppButtonPrimary htmlType="submit">Submit</AppButtonPrimary>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
