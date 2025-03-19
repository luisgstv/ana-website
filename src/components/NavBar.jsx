import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import helloKittyLogo from "../assets/images/hello-kitty-icon.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (event) => {
    const button = event.currentTarget;

    button.classList.remove("navbar__button--clicked");

    setTimeout(() => {
      button.classList.add("navbar__button--clicked");
    }, 10);

    setTimeout(() => {
      button.classList.remove("navbar__button--clicked");
    }, 400);
  };

  return (
    <div className="navbar">
      <div className="navbar__brand">
        <Link to="/">
          <img
            className="navbar__logo"
            src={helloKittyLogo}
            alt="Logo do Site"
          />
        </Link>
        <Link to="/">
          <h1 className="navbar__title">Mundinho da Ana</h1>
        </Link>
      </div>

      <motion.div
        animate={{ rotate: menuOpen ? -90 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="navbar__menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__modal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="navbar__menu">
              <Link to="/memories" onClick={() => setMenuOpen(!menuOpen)}>
                <button className="navbar__button" onClick={handleClick}>
                  Galeria de Memórias
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
