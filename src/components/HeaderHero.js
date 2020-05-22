import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {AuthContext } from "../Auth.js"

import decoration from "../assets/Decoration.svg";

export default function HeaderHero() {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="heading-wrapper">
      <h1 className="heading">
        Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <div className="title-wrapper">
        <div className="img-wrapper">
          <img src={decoration} alt="decoration" />
        </div>
        <NavLink to={currentUser ? "/oddaj-rzeczy" : "/login"}>
          <button className="btn">
            oddaj
            <br />
            rzeczy
          </button>
        </NavLink>
        <NavLink to={currentUser ? "/oddaj-rzeczy" : "/login"}>
          <button className="btn">
            zorganizuj
            <br />
            zbiórkę
          </button>
        </NavLink>
      </div>
    </div>
  );
}
