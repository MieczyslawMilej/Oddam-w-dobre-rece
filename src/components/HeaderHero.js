import React from "react";
import { NavLink } from "react-router-dom";

import decoration from "../assets/Decoration.svg";

export default function HeaderHero() {
  return (
    <>
      <h1>
        Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <div>
        <div className="img-wrapper">
          <img src={decoration} alt="decoration" />
        </div>
        <NavLink to="/login">
          <button className="btn">oddaj rzeczy</button>
        </NavLink>
        <NavLink to="/login">
          <button className="btn">zorganizuj zbiórkę</button>
        </NavLink>
      </div>
    </>
  );
}
