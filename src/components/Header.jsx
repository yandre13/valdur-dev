import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/svg/logo.svg"
import Circles from "./Circles";

const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About me",
    path: "/about-me"
  },
  {
    name: "Projects",
    path: "/projects"
  },
  {
    name: "Contact me",
    path: "/contact-me"
  }
];

const BurgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_1059_8437" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect x="0.5" y="0.5" width="23" height="23" fill="#C4C4C4" stroke="#494F66" />
    </mask>
    <g mask="url(#mask0_1059_8437)">
      <path d="M2 20.667H22" stroke="#7678ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 4H2" stroke="#7678ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 12.333H2" stroke="#7678ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8812 5.88164L14.1187 4.11914L9.99997 8.23164L5.88122 4.11914L4.11871 5.88164L8.23122 10.0004L4.11871 14.1191L5.88122 15.8816L9.99997 11.7691L14.1187 15.8816L15.8812 14.1191L11.7687 10.0004L15.8812 5.88164Z" fill="#7678ED" />
  </svg>
)

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleToggle = () => {
    const navlinks = document.querySelector(".navlinks");
    navlinks.classList.toggle("active");
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const navlinks = document.querySelector(".navlinks");
    const burgerButton = document.querySelector(".burger-button");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        navlinks.classList.remove("active");
        burgerButton.classList.remove("active");
        setIsOpen(false);
      }
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${scrollPosition > 0 ? 'shadow' : ''}`}>
      <div className="header-content container">
        <Link to="/" className="logo">
          <div>
            <img src={logo} alt="VALDUR" />
          </div>
          <h1>VALDUR</h1>

        </Link>

        <nav className="navlinks">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className={({ isActive }) => isActive ? "active" : ""}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
          {isOpen && (
            <div style={{ transform: "translateX(33%)" }}>
              <Circles />
            </div>
          )}
        </nav>

        <button className="burger-button" onClick={handleToggle}>
          {isOpen ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>
    </header>
  );
}