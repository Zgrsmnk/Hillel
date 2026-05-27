import { useContext } from "react"
import { ThemeContext, themes } from "../themeContext"

const ChangeThemeButton = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const handleClick = () => {
        setTheme(theme.color === "green" ? themes.dark : themes.light);
    };
    return (
        <button onClick={handleClick}>Change Theme</button>
    );
};

export default ChangeThemeButton;