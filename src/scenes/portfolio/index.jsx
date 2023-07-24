import { useState, useEffect, useRef } from "react";
import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";
import PortfolioCard from "../../components/PortfolioCard";
import projects from "../../dataSource/projectsData";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const isotopeRef = useRef(null);

  useEffect(() => {
    // Initialize Isotope after the component has mounted and images have loaded
    const grid = document.querySelector(".project-cards");
    imagesLoaded(grid, function () {
      isotopeRef.current = new Isotope(grid, {
        itemSelector: ".isotope-item",
        layoutMode: "fitRows",
        filter: "*",
      });
    });
  }, []);

  useEffect(() => {
    // Update Isotope layout whenever selectedCategory changes
    if (isotopeRef.current) {
      const currentFilter = selectedCategory === "all" ? "*" : `.${selectedCategory}`;
      isotopeRef.current.arrange({ filter: currentFilter });
    }
  }, [selectedCategory]);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <section id="portfolio" className="featured-section p-3 p-lg-5">
        <div className="container-fluid">
          <h2 className="section-title font-weight-bold mb-5">
            Selected Projects
          </h2>
          <div className="row">
            <div className="col">
              <div className="portfolio-filters">
                <ul id="filters" className="filters mb-5 mx-auto ps-0">
                  <li
                    className={`type ${selectedCategory === "all" ? "active" : ""} mb-3 mb-lg-0`}
                    onClick={() => handleFilterClick("all")}
                  >
                    All
                  </li>
                  <li
                    className={`type ${selectedCategory === "uiux" ? "active" : ""} mb-3 mb-lg-0`}
                    onClick={() => handleFilterClick("uiux")}
                  >
                    Web UI/UX
                  </li>
                  <li
                    className={`type ${selectedCategory === "frontend" ? "active" : ""} mb-3 mb-lg-0`}
                    onClick={() => handleFilterClick("frontend")}
                  >
                    Frontend
                  </li>
                  <li
                    className={`type ${selectedCategory === "bootstrap" ? "active" : ""} mb-3 mb-lg-0`}
                    onClick={() => handleFilterClick("bootstrap")}
                  >
                    Bootstrap
                  </li>
                  <li
                    className={`type ${selectedCategory === "react" ? "active" : ""} mb-3 mb-lg-0`}
                    onClick={() => handleFilterClick("react")}
                  >
                    React
                  </li>
                </ul>
                {/*//filters*/}
              </div>
            </div>
          </div>
          <div className="project-cards row isotope">
            {projects && Array.isArray(projects) && projects.length > 0 ? (
              projects.map((project, index) => (
                <PortfolioCard key={index} project={project} />
              ))
            ) : (
              <p>No projects available.</p>
            )}
          </div>
          {/*//row*/}
        </div>
        {/*//container*/}
      </section>
    </>
  );
};

export default Portfolio;
