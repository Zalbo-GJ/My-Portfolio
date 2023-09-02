import React from "react";
import myPhoto from "../images/real.png"; // replace with your actual path
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useTextStyle } from "../darkMode";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TextureLoader } from "three";

function Intro() {
  const textStyle = useTextStyle();
  const texture = new TextureLoader().load(myPhoto);
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="intro">
      <div className="intro-left">
        <h3>
          Hello, <span>I'm</span>
        </h3>{" "}
        <h2>ZALBOWOSSN GIZAW JAGEMA</h2>
        <h4 style={textStyle}>Full-Stack Web and Mobile Developer</h4>
        <p style={textStyle}>
          I am committed to finding innovative solutions and continuously
          experimenting to help my clients achieve their goals.
        </p>
        <div className="lets-talk">
          {" "}
          <button class="btn" type="button" onClick={handleScrollToContact}>
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
          <h4 style={textStyle}>Checkout my socials</h4>
          <a
            href="https://www.linkedin.com/in/zalbowossn-jagema-18590823a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin style={{ color: "orange", fontSize: "36px" }} />
          </a>
          <a
            href="https://github.com/Zalbo-GJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare style={{ color: "orange", fontSize: "40px" }} />
          </a>
        </div>
      </div>
      <div className="intro-right">
        <div className="canva-container">
          {" "}
          <Canvas>
            <>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.6}>
                <MeshDistortMaterial
                  color="#c8a7d8"
                  attach="material"
                  distort={0.4}
                  speed={1}
                />
              </Sphere>
            </>
          </Canvas>
        </div>
        {/* <div
          className="canva-container"
          style={{ zIndex: 11, bottom: "-10rem" }}
        >
          {" "}
          <Canvas>
            <>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={1.89}>
                <MeshDistortMaterial
                  color="#c8a7d8"
                  attach="material"
                  distort={0.6}
                  speed={1}
                />
              </Sphere>
            </>
          </Canvas>
        </div> */}
        <img src={myPhoto} alt="My Photo" />
        {/* <div
          className="canva-container"
          style={{ right: "-10rem", bottom: "-10rem", zIndex: 11 }}
        >
          {" "}
          <Canvas>
            <>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[1, 2, 3]} />
              <Sphere args={[1, 100, 200]} scale={1.6}>
                <MeshDistortMaterial
                  color="#c8a7d8"
                  attach="material"
                  distort={0.6}
                  speed={1}
                />
              </Sphere>
            </>
          </Canvas>
        </div> */}
      </div>
    </div>
  );
}

export default Intro;
