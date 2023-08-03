import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";
import ThemeSwitcher from "./ThemeSwitcher";
import NavItem from "./NavItem";
import SocialLinks from "./SocialLinks";


const NavigationBar = ({links}) => {
  return (
    <Navbar  expand="lg" variant="dark" collapseOnSelect>
      <Navbar.Toggle aria-controls="navigation" />
      <Navbar.Collapse
        id="navigation"
        className="align-items-center justify-content-center"
      >
        <div id="navigation" className="flex-column">
          <div className="navigation__header">
            <div className="profile-section pt-3 pt-lg-0 d-flex align-items-center flex-column">
              <img
                className="profile-image mb-3 rounded-circle img-fluid mx-auto"
                src="/assets/images/profile.png"
                alt="image"
              />
              <SocialLinks />
              <hr />
            </div>
          </div>
            <div className="navigation__body">
            <NavItem links={links} />
            </div>
          
          <div className="navigation__footer mt-5">
          <ThemeSwitcher />
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
// Define propTypes for the 'links' prop
NavigationBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
};
export default NavigationBar;
