import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import {AuthContext } from "../Auth.js"
import app from "../base"


export default function Navigation() {
  const {currentUser} = useContext(AuthContext);
  const smoothToggle = true;

  return (
    <nav>
      <ul className="login-nav">
      {currentUser &&

<li>Cześć {currentUser.email}!</li>
        }

        <li>
          <NavLink to={currentUser ?"" : "/login"}>{currentUser ?"Oddaj rzeczy" : "Zaloguj"}</NavLink>
        </li>
        <li>
          <NavLink className="register-link" to={currentUser ?"/wylogowano" : "/register"} onClick={currentUser ? ()=> app.auth().signOut() : null}>
            {currentUser ?"Wyloguj" : "Załóż konto"}
          </NavLink>
        </li>
      </ul>
      <ul className="main-nav">
        <li>
          <Link
            className="active"
            to="home"
            smooth={smoothToggle}
            duration={1000}
          >
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
