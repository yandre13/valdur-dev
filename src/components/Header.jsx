import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, useAnimate, usePresence } from "framer-motion";
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
const variants = {
  open: {
    transition: {
      delay: 0.4,
      // delay between each item
      staggerChildren: .1,
      // delay in ms for items
      delayChildren: 0.4
    }
  },
  closed: {
    transition: {
      delay: .1,
      staggerChildren: 0.04, staggerDirection: -1
    }
  }
};
const variantsItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [scope, animate] = useAnimate()

  const handleToggle = () => {
    // const navlinks = document.querySelector(".navlinks");
    // navlinks.classList.toggle("active");
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

  useEffect(() => {
    if (isOpen) {
      const enterAnimation = async () => {
        animate('.burger-container', {
          clipPath: `circle(1000px at 30px 20px)`,
          height: '100vh',
        }, {
          duration: 0.3,
        })
        animate('.navlinks', {
          opacity: 1,
          x: 0,
        }, {
          delay: 0.3,
          duration: 0.3,
        })

      }
      enterAnimation()
    } else {
      const exitAnimation = async () => {
        animate('.navlinks', {
          opacity: 0,
          x: -100,
        }, {
          delay: 0.2,
          duration: 0.2,
        })
        animate('.burger-container', {
          clipPath: 'circle(24px at 325px 30px)',
          height: '60px',
        }, {
          delay: 0.3,
          duration: 0.3,
        })
      }
      exitAnimation()
    }

  }, [isOpen])

  return (
    <header className={`Header ${scrollPosition > 0 ? 'shadow' : ''}`}>
      <div className="header-content container" ref={scope}>
        <Link to="/" className="logo">
          <div>
            <img src={logo} alt="VALDUR" />
          </div>
          <h1>VALDUR</h1>

        </Link>

        <nav className="navlinks">
          <motion.ul variants={variants} initial={false}
            animate={isOpen ? "open" : "closed"}>
            {links.map((link, index) => (
              <motion.li key={index} variants={variantsItem}>
                <NavLink to={link.path} className={({ isActive }) => isActive ? "active" : ""}>{link.name}</NavLink>
              </motion.li>
            ))}
          </motion.ul>
          {isOpen && (
            <div style={{ transform: "translateX(33%)" }}>
              <Circles />
            </div>
          )}
        </nav>

        <div className="burger-container">
          <button className="burger-button" onClick={handleToggle}>
            {isOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}