import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {AuthContext } from "../Auth.js"

import decoration from "../assets/Decoration.svg";
import tshirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import magnifying_glass from "../assets/Icon-3.svg";
import rotation from "../assets/Icon-4.svg";

export default function HomeSteps() {

  const {currentUser} = useContext(AuthContext);
  return (
    <section className="steps">
      <div className="wrapper">
        <h1 className="heading">Wystarczą 4 proste kroki</h1>
        <img src={decoration} alt="decoration" />
        <div className="steps-wrapper">
          <div className="steps-box">
            <div className="steps-img-wrapper">
              <img src={tshirt} alt="tshirt icon" />
            </div>
            <p className="title">Wybierz rzeczy</p>
            <p className="text">
              ubrania, zabawki,
              <br />
              sprzęt i inne
            </p>
          </div>
          <div className="steps-box">
            <div className="steps-img-wrapper">
              <img src={bag} alt="bag icon" />
            </div>
            <p className="title">Spakuj je</p>
            <p className="text">
              skorzystaj z
              <br />
              worków na śmieci
            </p>
          </div>
          <div className="steps-box">
            <div className="steps-img-wrapper">
              <img src={magnifying_glass} alt="magnifying glass icon" />
            </div>
            <p className="title">
              Zdecyduj komu
              <br />
              chcesz pomóc
            </p>
            <p className="text">
              wybierz zaufane
              <br />
              miejsce
            </p>
          </div>
          <div className="steps-box">
            <div className="steps-img-wrapper">
              <img src={rotation} alt="thsirt-icon" />
            </div>
            <p className="title">Zamów kuriera</p>
            <p className="text">
              kurier przyjedzie
              <br />w dogodnym terminie
            </p>
          </div>
        </div>
        <NavLink to={currentUser ? "/oddaj-rzeczy" : "/login"}>
          <button className="btn">oddaj<br/>rzeczy</button>
        </NavLink>
      </div>
    </section>
  );
}
