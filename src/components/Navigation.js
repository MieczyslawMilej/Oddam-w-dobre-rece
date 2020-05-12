import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Navigation() {
  const smoothToggle = true;

  return (
    <nav>
      <ul className="login-nav">
        <li>
          <NavLink to="/login">Zaloguj</NavLink>
        </li>
        <li>
          <NavLink to="/register">Załóż konto</NavLink>
        </li>
      </ul>
      <ul className="main-nav">
        <li>
          <Link to="home" smooth={smoothToggle} duration={1000}>
            Start
          </Link>
        </li>
        <li>
          <Link to="steps" smooth={smoothToggle} duration={1000}>
            O co chodzi?
          </Link>
        </li>
        <li>
          <Link to="about" smooth={smoothToggle} duration={1000}>
            O nas
          </Link>
        </li>
        <li>
          <Link to="help" smooth={smoothToggle} duration={1000}>
            Fundacje i Organizacje
          </Link>
        </li>
        <li>
          <Link to="footer" smooth={smoothToggle} duration={1000}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
