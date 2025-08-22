import "./Header.css";
import { LuSunMedium } from "react-icons/lu";
import { LuSunMoon } from "react-icons/lu";

export default function Header({ titles, theme, setTheme }) {
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <nav>
      <h1>{titles}</h1>
      <span onClick={toggleTheme}>
        {theme === "light" ? <LuSunMoon size={35}/> : <LuSunMedium size={35}/>}
      </span>
    </nav>
  );
}

//export default Header;
