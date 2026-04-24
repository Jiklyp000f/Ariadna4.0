import style from "./styles.module.scss";
import maxIcon from "@/assets/image/icons/max_icon.svg";
import vkIcon from "@/assets/image/icons/vk_icon.svg";
import { Title } from "@/shared/ui/titles";
import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.contacts}>
        <div className={style.contactsInfo}>
          <Title variant="4">Контакты</Title>
          <div>
            <p>
              <UserOutlined />
              <span>ООО «В ПУТЬ»</span>
            </p>
            <p>
              <HomeOutlined />
              <span>Йошкар-Ола,ул. Ленинский пр-кт, д. 52А, кв. 73</span>
            </p>
            <p>
              <PhoneOutlined /> <a href="tel:+79021059182">8 (902) 105-91-82</a>
            </p>
            <p>
              <MailOutlined />{" "}
              <a href="mailto:osokinap74@gmail.com">osokinap74@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className={style.help}>
        <Title variant="4">Помощь</Title>
        <div className={style.helpLinks}>
          <a href="/404">Скидки</a>
          <a href="/404">Форматы квестов</a>
          <a href="/404">Правила пользования</a>
          <a href="/404">Термины</a>
        </div>
      </div>

      <div className={style.socBlock}>
        <Title variant="4">Соцсети</Title>
        <div className={style.socialWrapper}>
          <div className={style.social}>
            <a href="#">
              <img src={vkIcon} alt="vk" className={style.vk} />
            </a>

            <a href="#">
              <img src={maxIcon} alt="max" className={style.max} />
            </a>
          </div>
          <p className={style.copy}>
            &copy; ООО «В ПУТЬ» 2026. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};
