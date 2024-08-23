import { useEffect } from "react";
import useTheme from "../hooks/useTheme";

function ThemeSwitch(props) {
  const { bgColor, altTheme } = useTheme();
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);
  return (
    <button onClick={() => props.changeTheme(altTheme)}>{altTheme}</button>
  );
}
export default ThemeSwitch;
