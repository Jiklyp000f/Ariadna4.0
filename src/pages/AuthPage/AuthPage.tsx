import { useState } from "react";
import { Footer } from "../../widgets/Footer/Footer";

import style from "./AuthPage.module.css";
import { MainLayout } from "@/components/Layouts/MainLayout/MainLayout";
import { Header } from "@/widgets/Header/Header";
import { ContentLayout } from "@/components/Layouts/ContentLayout/ContentLayout";
import { Form } from "@/components/Forms/Forms/Form";
import { Input } from "@/components/Forms/Inputs/Input";
import { AppButtonPrimary } from "@/shared/ui/button";

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
              <AppButtonPrimary
                onClick={() => console.log("победа", login, password)}
              >
                Войти
              </AppButtonPrimary>
            </Form>
          </div>
        </ContentLayout>
      </MainLayout>
      <Footer />
    </>
  );
};
