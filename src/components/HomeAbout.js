import React from "react";

import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
import people from "../assets/People.jpg";

export default function HomeAbout() {
  return (
    <section className="about">
      <div className="wrapper">
        <div className="content-wrapper">
          <h1 className="heading">O nas</h1>
          <img className="about-decoration" src={decoration} alt="decoration" />
          <p className="about-text">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img className="signature" src={signature} alt="signature" />
        </div>
        <div className="about-img">
          <img src={people} alt="people" />
        </div>
      </div>
    </section>
  );
}
