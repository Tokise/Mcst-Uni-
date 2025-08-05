import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/mcst-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hidden, setHidden] = useState(false); 
  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll detection to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`} ref={navRef}>
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            if (window.innerWidth <= 768) setMenuOpen(false);
          }}
        >
          <img src={logo} alt="Logo" /> Mandaluyong College of Science and Technology
        </Link>

        {/* Menu Toggle with X transition */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => {
                if (window.innerWidth <= 768) setMenuOpen(false);
              }}
            >
              About
            </NavLink>
          </li>

          <li
            className={`dropdown ${openDropdown === 0 ? "open" : ""}`}
            onClick={() => window.innerWidth <= 768 && toggleDropdown(0)}
          >
            <span>
              Admission
              <i
                className={`fas fa-caret-down dropdown-caret ${
                  openDropdown === 0 ? "rotate" : ""
                }`}
              ></i>
            </span>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/admission/program-offerings"
                  className={({ isActive }) =>
                    `dropdown-link${isActive ? " active" : ""}`
                  }
                  onClick={() => {
                    if (window.innerWidth <= 768) setMenuOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  Program Offerings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admission/info"
                  className={({ isActive }) =>
                    `dropdown-link${isActive ? " active" : ""}`
                  }
                  onClick={() => {
                    if (window.innerWidth <= 768) setMenuOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  Admissions Info
                </NavLink>
              </li>
            </ul>
          </li>

          <li
            className={`dropdown ${openDropdown === 1 ? "open" : ""}`}
            onClick={() => window.innerWidth <= 768 && toggleDropdown(1)}
          >
            <span>
              Resources
              <i
                className={`fas fa-caret-down dropdown-caret ${
                  openDropdown === 1 ? "rotate" : ""
                }`}
              ></i>
            </span>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="https://sites.google.com/view/mcst-registrar/home"
                  className="dropdown-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (window.innerWidth <= 768) setMenuOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  Registrar's Office
                </a>
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/mandaluyong-college-of-science/home"
                  className="dropdown-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (window.innerWidth <= 768) setMenuOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  Learning Resources Center
                </a>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/apply"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => {
                if (window.innerWidth <= 768) setMenuOpen(false);
              }}
            >
              Apply
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
