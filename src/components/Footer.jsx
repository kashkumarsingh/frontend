import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const Footer = ({year}) => {
  return (
    <footer className="footer text-center py-4">
     <div className="container-fluid">
     <small className="copyright">&copy; {year} Designed & Built with ❤️ by <Link
        to="https://www.linkedin.com/in/kashkumar-singh/" target="_blank" rel="noreferrer">Me</Link></small>
     </div>
  </footer>
  )
}

Footer.propTypes = {
  year: PropTypes.number
};


export default Footer