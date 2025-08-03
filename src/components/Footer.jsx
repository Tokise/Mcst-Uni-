import logo from "../assets/images/mcst-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="MCST Logo" />
          <h4>Address:</h4>
          <p>Welfareville Compound, Barangay Addition Hills, Mandaluyong City 1550</p>
        </div>

        <div className="footer-links footer-column">
          <h4>Admissions</h4>
          <ul>
            <li><a href="/admission/program-offerings">Program Offerings</a></li>
            <li><a href="/admission/info">Admissions Info</a></li>
          </ul>
        </div>

        <div className="footer-links footer-column">
          <h4>Resources</h4>
          <ul>
            <li> <a
              href="https://sites.google.com/view/mcst-registrar/home"
              className="dropdown-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Registrar's Office</a></li>
            <li>
              <a
                href="https://sites.google.com/view/mandaluyong-college-of-science/home"
                className="dropdown-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learning Resource Center</a></li>
          </ul>
        </div>

        <div className="footer-links footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/news">News and Events</a></li>
            <li><a href="/careers">Career Opportunities</a></li>
          </ul>
        </div>

        <div className="foot-contact">
          <h4>Contact:</h4>
          <p>(02) 87160352</p>
          <p>registrarsoffice@mcst.edu.ph</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MCST. All rights reserved.</p>
        <a href="#">Privacy Policy</a> |
        <a href="#">Terms of Service</a> |
        <a href="#">Cookies Settings</a>
      </div>
    </footer>
  );
}
