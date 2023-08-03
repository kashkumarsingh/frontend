import ProjectCard from "../components/ProjectCard"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";


const projectsLinks = [
    { href: "overview", label: "Overview", icon: "home" },
    { href: "design", label: "UI Design", icon: "home" },
    { href: "results", label: "Results", icon: "home" },
    // Add more links for your projects
  ];

const ProjectPage = () => {
    
  return (
      <>
    <Sidebar links={projectsLinks}/>
      <div className="main-wrapper">
        <Container fluid>
            <ProjectCard/>
          <Footer year={new Date().getFullYear()} />
        </Container>
      </div>
    </>
  )
}
export default ProjectPage