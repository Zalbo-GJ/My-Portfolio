import { useContext } from "react";
import { themeContext } from "./Context";
import { useState, useEffect } from 'react';

export function useLinkStyle() {
  const theme = useContext(themeContext);
  const [isHovered, setIsHovered] = useState(false);

  const darkMode = theme.state.darkMode;
  const linkStyle = darkMode 
    ? isHovered 
      ? { color: "#d0cedf" } 
      : { color: "#d0cedf" }
    : isHovered 
      ? {  } 
      : {};

  useEffect(() => {
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return linkStyle;
}
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
