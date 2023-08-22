import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
function NavBar() {
  const [navActive, setActive] = useState(false);
  const showNav = () => {
    setActive(!navActive);
  };
  return (
    <div className="navbar">
      <div className="nav-left">
        <h3 className="logo">Zalbo</h3>
        {/* Dark mode */}
      </div>
      <div  className={navActive ? "nav-responsive" : "nav-right"}>
        <ul className="nav-lists">
          <li>
            <h4>Home</h4>
          </li>
          <li>
            <h4>Projects</h4>
          </li>
          <li>
            <h4>Resume</h4>
          </li>
        </ul>
      </div>
      <button className="ham-btn" on onClick={showNav}>
       {navActive? <GiKnifeFork/>: <FaHamburger />}
      </button>
    </div>
  );
}

export default NavBar;
