import React from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

import decoration from "../assets/Decoration.svg";

export default function GiveAway() {
  return (
    <section className="give-away">
      <div className="wrapper">
        <header className="give-header">
        <Navigation />
          <h1 className="heading">
            Oddaj rzeczy, których juz nie chcesz
            <br />
            POTRZEBUJĄCYM
          </h1>

          <img src={decoration} alt="decoration" />
          <h2 className="subheading">Wystarczą 4 proste kroki:</h2>
          <div className="small-steps-wrapper">
            <p className="step">1<br/> Wybierz rzeczy</p>
            <p className="step">2<br/> Spakuj je w worki</p>
            <p className="step">3<br/> Wybierz fundację</p>
            <p className="step">4<br/> Zamów kuriera</p>
          </div>
        </header>
        <Footer />
      </div>
    </section>
  );
}
