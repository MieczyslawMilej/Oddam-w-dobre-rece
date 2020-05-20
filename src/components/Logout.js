import React from "react";
import { NavLink } from "react-router-dom";

import Navigation from "./Navigation";
import decoration from "../assets/Decoration.svg";

export default function Login() {
  return (
    <section className="logout">
      <div className="wrapper">
        <Navigation />
        <h1 className="heading">
          Wylogowanie nastąpiło <br /> pomyślnie!
        </h1>
        <img className="footer-decoration" src={decoration} alt="decoration" />
        <NavLink to="/">
          <button className="btn">Strona główna</button>
        </NavLink>
      </div>
    </section>
  );
}
