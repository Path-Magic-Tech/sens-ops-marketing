import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Sens Operations</h3>
            <p className="footer-tagline">
              The next generation of smart agriculture
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Solutions</h4>
            <ul className="footer-links">
              <li><Link to="/solutions">Potato Storage</Link></li>
              <li><Link to="/solutions">Disease Detection</Link></li>
              <li><Link to="/solutions">Environmental Monitoring</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get in Touch</h4>
            <p>Ready to optimize your storage operations?</p>
            <Link to="/contact" className="btn btn-light">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sens Operations Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
