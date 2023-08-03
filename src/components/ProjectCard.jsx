import { useEffect } from 'react';
import { useParams } from "react-router-dom";
const ProjectCard = () => {
    const {projectName} = useParams();
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures the effect runs only once
  return (
    <>
      <section className="project px-3 py-5 p-md-5" id="project1">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-section">
              <h2 className="heading text-center">Case Study:{projectName}</h2>
              <div className="project-intro text-center">
                <p className="mb-0 lead">Project intro goes here.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-meta theme-bg-light p-4">
          <div className="row g-4 g-lg-5">
            <div className="col-12 col-lg-12 col-xxl-12">
              <img
                className="project-thumb img-fluid rounded"
                src="assets/images/project/project-3.jpg"
                alt=""
              />
            </div>
            {/*//col*/}
            <div className="col-12 col-lg-12 col-xxl-12">
              <div className="client-info">
                <h3 className="client-name font-weight-bold mb-4">
                  Client Name
                </h3>
                <ul className="client-meta list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-industry fa-fw me-2"></i>
                    <strong>Industry:</strong> Tech
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-users fa-fw me-2"></i>
                    <strong>Size:</strong> 100+
                  </li>
                  <li className="mb-2">
                    <strong>
                      <i className="fas fa-link fa-fw me-2"></i>Website:
                    </strong>{" "}
                    <a className="theme-link" href="#">
                      clientsite.com
                    </a>
                  </li>
                </ul>
                <div className="client-bio mb-4">
                  Short description of the client and project requirements.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor.
                </div>
                <h4 className="subheading mb-3">Project Requirements</h4>
                <ul className="mb-0">
                  <li className="mb-2">
                    Requirement lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit.
                  </li>
                  <li className="mb-2">
                    Requirement donec pede justo, fringilla vel, aliquet nec.
                  </li>
                  <li className="mb-2">
                    Requirement phasellus ullamcorper ipsum rutrum nunc.{" "}
                  </li>
                </ul>
              </div>
              {/*//client-info*/}
            </div>
            {/*//col*/}
          </div>
          {/*//row*/}
        </div>
        {/*//project-meta*/}
        <div className="project-sections py-5">
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Project Overview</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.{" "}
            </p>
          </div>
          {/*//project-section*/}

          <div className="project-section mb-5">
            <h3 className="project-section-title">The Challenge</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.{" "}
            </p>
          </div>
          {/*//project-section*/}

          <div className="project-section mb-5">
            <h3 className="project-section-title">The Approach Solution</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.{" "}
            </p>
            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img
                  className="img-fluid rounded"
                  src="assets/images/project/project-figure-1.jpg"
                  alt="image"
                />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img
                  className="img-fluid rounded"
                  src="assets/images/project/project-figure-2.jpg"
                  alt="image"
                />
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.{" "}
            </p>
          </div>
          {/*//project-section*/}

          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">The Results</h3>

            <div className="metrics mb-4">
              <div className="row">
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Efficiency</div>
                    <div className="metric-data mb-2">
                      20% <span className="unit">up</span>
                    </div>
                    <div className="metric-desc">
                      Metric description lorem ipsum dolor sit amet.
                    </div>
                  </div>
                </div>
                {/*//metric*/}
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Customer Satisfaction</div>
                    <div className="metric-data mb-2">
                      14% <span className="unit">up</span>
                    </div>
                    <div className="metric-desc">
                      Metric description lorem ipsum dolor sit amet.
                    </div>
                  </div>
                </div>
                {/*//metric*/}
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Sales Generated</div>
                    <div className="metric-data mb-2">$130K</div>
                    <div className="metric-desc">
                      Metric description lorem ipsum dolor sit amet.
                    </div>
                  </div>
                </div>
                {/*//metric*/}
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Overall Cost</div>
                    <div className="metric-data mb-2">
                      20% <span className="unit">down</span>
                    </div>
                    <div className="metric-desc">
                      Metric description lorem ipsum dolor sit amet.
                    </div>
                  </div>
                </div>
                {/*//metric*/}
              </div>
              {/*//row*/}
            </div>
            {/*//metrics*/}

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus.{" "}
            </p>
          </div>
          {/*//project-section*/}

          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Client Testimonial</h3>
          </div>
          {/*//project-section*/}
          <div className="client-quote">
            <div className="quote-holder">
              <blockquote className="quote-content">
                Simon is a brilliant software engineer! Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
              </blockquote>
              <i className="fas fa-quote-left"></i>
            </div>
            {/*//quote-holder*/}
            <div className="source-holder">
              <div className="source-profile">
                <img src="assets/images/clients/profile-4.png" alt="image" />
              </div>
              <div className="meta">
                <div className="name">James Lee</div>
                <div className="info">Product Manager, Amazon</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
