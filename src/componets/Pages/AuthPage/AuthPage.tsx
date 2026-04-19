import { useState } from "react";
import { Button } from "../../Buttons/Button";
import { Footer } from "../../Footer/Footer";
import { Form } from "../../Forms/Forms/Form";
import { Input } from "../../Forms/Inputs/Input";
import { Header } from "../../Header/Header";
import { ContentLayout } from "../../Layouts/ContentLayout/ContentLayout";
import { MainLayout } from "../../Layouts/MainLayout/MainLayout";

import style from "./AuthPage.module.css";

//NOTE: сохраняй значения формы в локалстораж, мне эти значения нужны будут для управления роутами. роуты покажу позже. я понимаю что это не секьюрно это для демонтсрации

export const AuthPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <MainLayout>
        <Header />
        <ContentLayout>
          <div className={style.wrapper}>
            <Form>
              <Input
                type="email"
                label="Логин/Email"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <Input
                type="password"
                label="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={() => console.log("победа", login, password)}>
                Войти
              </Button>
            </Form>
          </div>
        </ContentLayout>
      </MainLayout>
      <Footer />
    </>
  );
};
