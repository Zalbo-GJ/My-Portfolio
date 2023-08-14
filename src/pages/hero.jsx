import Intro from "../components/intro";
import NavBar from "../components/nav_bar";

function Hero() {
  return (
    <div className="hero">
      <NavBar></NavBar>
      <Intro></Intro>
    </div>
  );
}

export default Hero;
