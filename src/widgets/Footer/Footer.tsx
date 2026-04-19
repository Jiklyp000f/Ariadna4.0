import style from "./styles.module.scss";
import vkIcon from "@/assets/image/icons/vk.png";
import tgIcon from "@/assets/image/icons/telegram.png";
import { Title } from "@/components/Titles/Title";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.contacts}>
        <div className={style.footerLogo}>
          <Logo />
        </div>
        <div className={style.contactsInfo}>
          <Title variant={"4"}>Контакты</Title>
          <div>
            <p>ООО “В ПУТЬ”</p>
            <p>Адрес: Йошкар-Ола,</p>
            <p>Ул. Ленинский пр-кт, д. 52А, кв. 73</p>
            <p>Телефон: 8(902) 105- 91-82</p>
            <p>Эл. почта: osokinap74@gmail.com</p>
          </div>

          <div className={style.social}>
            <img src={vkIcon} alt="vk" />
            <img src={tgIcon} alt="tg" />
          </div>
        </div>
      </div>
      <div className={style.help}>
        <Title variant={"4"}>Помощь</Title>
        <div className={style.helpLinks}>
          <a href="/404">Скидки</a>
          <a href="/404">Форматы квестов</a>
          <a href="/404">Правила пользования</a>
          <a href="/404">Термины</a>
        </div>
      </div>
    </footer>
  );
};
