import { Logo } from "./Logo/Logo";
import style from "./Header.module.css";
import { Navigation } from "./Navigation/Navigation";
import { Button, ButtonSecondary } from "../Buttons/Button";

export const Header = () => {
      return (
            <div className={style.header}>
                  <Logo />
                  <Navigation />
                  <div className={style.buttonGroup}>
                        <Button onClick={() => console.log("Primary")} size="xl">
                              Primary
                        </Button>
                        <ButtonSecondary onClick={() => console.log("Secondary")} size="xl">
                              Secondary
                        </ButtonSecondary>
                  </div>
            </div>
      );
};