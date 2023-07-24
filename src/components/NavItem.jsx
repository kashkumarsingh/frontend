import { useState } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-scroll';
const NavItem = ({links}) => {
  const [activeLink, setActiveLink] = useState("");
  const handleClick = (href) => {
    setActiveLink(href);
  };
  return (
    <>
     <ul className="navbar-nav flex-column text-start">
       {links.map(({href, label, icon})=> (
           <li key={href} className="nav-item">
            <Link style={{cursor:"pointer"}} to={href} smooth={true} duration={500} className={`nav-link ${href === activeLink ? 'active' : ''}`} onClick={() => handleClick(href)}><FontAwesomeIcon icon={['fas', `${icon}`]}/> {label}</Link>
         </li>
       ))}
     </ul>
    </>
  );
};

NavItem.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired,
  activeLink: PropTypes.string,
  handleClick: PropTypes.func
};

export default NavItem;
