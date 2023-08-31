import { useContext } from "react";
import { themeContext } from "./Context";

export function usePageStyle() {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;
  const pageStyle = darkMode
    ? { backgroundColor: "#020628", color: "#d0cedf", backgroundImage: "none" }
    : {};

  return pageStyle;
}
export function useTextStyle() {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;
  const textStyle = darkMode ? { color: "#d0cedf" } : {};

  return textStyle;
}
export function useServiceCardStyle() {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;
  const serviceCardStyle = darkMode
    ? {
        boxShadow:
          " 1rem 1rem 3.5rem #3f3671, -1rem -1rem 3.5rem #695fa2",
      }
    : {};

  return serviceCardStyle;
}
