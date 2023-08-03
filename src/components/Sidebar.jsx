// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
// import StickyBox from "react-sticky-box";
import NavigationBar from "./NavigationBar";

const Sidebar = ({links}) => {
  return (
    // <StickyBox  offsetBottom={20} style={{zIndex: "1"}}>
      <header className="header text-center">
        <div className="force-overflow">
          <h1 className="blog-name pt-lg-4 mb-0">
            <Link to="/" className="no-text-decoration">
              Kashkumar N Singh
            </Link>
          </h1>
          <NavigationBar links={links} />
          
        </div>
        {/* Sidebar */}
      </header>
    // </StickyBox>
  );
}
Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default Sidebar