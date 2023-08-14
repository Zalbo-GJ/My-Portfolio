import React from "react";
import myPhoto from "../images/myPhoto.png"; // replace with your actual path
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <h3>
          Hello, <span>I'm</span>
        </h3>{" "}
        <h2>ZALBOWOSSN GIZAW JAGEMA</h2>
        <h4>Full-Stack Web and Mobile Developer</h4>
        <p>
          I am committed to finding innovative solutions and continuously
          experimenting to help my clients achieve their goals.
        </p>
        <div className="lets-talk">
          {" "}
          <button class="btn" type="button">
            <strong>Let's Talk</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </div>
        <div className="socials">
          <h4>Checkout my socials</h4>
          <BsLinkedin style={{ color: "orange", fontSize: "36px" }} />
          <FaGithubSquare style={{ color: "orange", fontSize: "40px" }} />
        </div>
      </div>
      <div className="intro-right">
        <img src={myPhoto} alt="My Photo" />
      </div>
    </div>
  );
}

export default Intro;
