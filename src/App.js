import "./App.css";
import Footer from "./components/footer";
import { usePageStyle } from "./darkMode";
import ContactMe from "./pages/contact";
import Hero from "./pages/hero";
import MyProjects from "./pages/my_projects";
import MyServices from "./pages/my_services";
import Testimonials from "./pages/testimonials";
import { useEffect } from "react";
import NavBar from "./components/nav_bar";

function App() {
  const pageStyle = usePageStyle();

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const links = document.querySelectorAll(".nav-link");
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const id = e.currentTarget.getAttribute("href").slice(1);
          const targetElement = document.querySelector(id);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          } else {
            console.error(`Element with id "${id}" not found.`);
          }
        });
      });
    });
  }, []);

  return (
    <div className="App" style={pageStyle}>
      <NavBar></NavBar>

      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <MyServices />
      </section>
      <section id="projects">
        <MyProjects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}

export default App;
