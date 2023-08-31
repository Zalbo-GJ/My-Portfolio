import Intro from "../components/intro";
import { usePageStyle } from "../darkMode";

function Hero() {
  const pageStyle = usePageStyle();

  return (
    <div className="hero" style={pageStyle}>

      <Intro></Intro>
    </div>
  );
}
export default Hero;
