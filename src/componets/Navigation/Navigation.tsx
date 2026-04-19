import style from "./Navigation.module.css";
import { NavigationItem } from "./NavigationItem/NavigationItem";

const menuItems = [
  { id: 1, text: "Авторам" },
  { id: 2, text: "Помощь" },
  { id: 3, text: "Участникам" },
];

interface NavigationProps {
  onClick?: () => void;
}
export const Navigation = ({ onClick }: NavigationProps) => {
  return (
    <nav>
      <ul className={style.list}>
        {menuItems.map(({ text, id }) => (
          <NavigationItem onClick={onClick} key={id}>
            {text}
          </NavigationItem>
        ))}
      </ul>
    </nav>
  );
};
