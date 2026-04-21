import style from "./styles.module.scss";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Login } from "@/components/Login";
import { Logo } from "@/components/Logo";
import { useScreenSize } from "@/shared/lib/useScreenSize";
import { Flex, Modal } from "antd";
import { Title } from "@/shared/ui/Titles";
import { AppButtonPrimary, AppButtonSecondary } from "@/shared/ui/button";

export const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();
  const [open, setOpen] = useState(false);
  const [modal, showModal] = useState(false);

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
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum optio
          quam iure reprehenderit! Quis repudiandae aspernatur rerum, tempore
          veniam expedita ex nesciunt esse deleniti. Aspernatur enim corporis
          quos optio unde. Dolore tempore aut placeat saepe obcaecati maxime
          officiis nisi totam fuga voluptates dolor tenetur ut, animi officia,
          nihil at voluptate praesentium minima sint magni. Exercitationem,
          consectetur? Esse veritatis quia et voluptate quisquam quae tenetur
          voluptatem laborum, magni aspernatur facere pariatur iusto eum?
          Eligendi, inventore rem distinctio sapiente explicabo ducimus
          voluptatum aliquid corporis obcaecati cumque in unde voluptates
          impedit possimus repellat nam magni debitis, labore odio reiciendis?
          Natus molestiae porro quidem?
        </p>
        <Flex gap={20}>
          <AppButtonPrimary onClick={() => showModal(false)}>
            Вход
          </AppButtonPrimary>
          <AppButtonSecondary onClick={() => showModal(false)}>
            Регистрация
          </AppButtonSecondary>
        </Flex>
      </Modal>
    </div>
  );
};
