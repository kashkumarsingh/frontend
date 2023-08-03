import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import AboutMe from "../scenes/aboutme";
import Portfolio from "../scenes/portfolio";
import Skills from "../scenes/skills";

const homeLinks = [
  { href: "about", label: "About Me", icon: "user" },
  { href: "portfolio", label: "My Portfolio", icon: "briefcase" },
  { href: "skills", label: "My Skills", icon: "laptop-code" },
];

const HomePage = () => {
  return (
    <>
      <Sidebar links={homeLinks} />
      <div className="main-wrapper">
        <Container fluid>
          <AboutMe />
          <Portfolio />
          <Skills />
          <Footer year={new Date().getFullYear()} />
        </Container>
      </div>
    </>
  );
};
export default HomePage;
