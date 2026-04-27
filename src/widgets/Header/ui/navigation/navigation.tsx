import { useNavigate } from "react-router-dom";
import { menuItems } from "./data";
import { NavigationItem } from "./navigation-item";
import style from "./styles.module.scss";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => navigate(path);

  return (
    <nav>
      <ul className={style.list}>
        {menuItems.map(({ text, path, id }) => (
          <NavigationItem onClick={handleNavigate(path)} key={id}>
            {text}
          </NavigationItem>
        ))}
      </ul>
    </nav>
  );
};
