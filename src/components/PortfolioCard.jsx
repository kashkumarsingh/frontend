import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
const PortfolioCard = ({ project }) => {
  const {
    category,
    imageSrc,
    title,
    description,
    techStack,
    liveLink,
    githubLink,
  } = project;
  return (
    <div className={`isotope-item ${category.join(" ")} col-md-6 mb-5`}>
      <div className="card project-card">
        <div className="card-header">
          <Carousel touch={true} controls={false}>
            {imageSrc.map((image, imgIndex) => (
              <Carousel.Item key={imgIndex}>
                <img
                  className="d-block w-100 img-fluid"
                  src={image}
                  alt={`Project ${imgIndex + 1} Image ${imgIndex + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/project/${encodeURIComponent(title)}`}>{title}</Link>
          </h5>
          <p className="card-text">{description}</p>
          <div className="techstack-used">
            <p className="card-text">
              <small className="text-muted">Tech Stack Used:</small>
            </p>
            <div className="techstack-sprite d-flex align-items-center gap-2">
              {techStack.map((tech, index) => (
                <img
                  key={index}
                  alt={tech.alt}
                  title={tech.title}
                  className="tech-icon rounded"
                  src={tech.src}
                  style={{ width: "25px" }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center gap-2">
          <a className="btn btn-primary" href={liveLink}>
            <i className="fas fa-link me-2"></i>View Live
          </a>
          <a className="btn btn-secondary" href={githubLink}>
            <i className="fab fa-github me-2"></i>GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
PortfolioCard.propTypes = {
  project: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageSrc: PropTypes.arrayOf(PropTypes.any).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
    ).isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
};
export default PortfolioCard;
