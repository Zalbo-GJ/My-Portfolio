import "./App.css";
import Footer from "./components/footer";
import ContactMe from "./pages/contact";
import Hero from "./pages/hero";
import MyProjects from "./pages/my_projects";
import MyServices from "./pages/my_services";
import Testimonials from "./pages/testimonials";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <MyServices></MyServices>
      <MyProjects></MyProjects>
      <Testimonials></Testimonials>
      <ContactMe></ContactMe>
      <Footer></Footer>
      

    </div>
  );
}

export default App;
