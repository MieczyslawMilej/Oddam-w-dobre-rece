import React from "react";

import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeHelp from "./HomeHelp";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="LandingPage">
      <HomeHeader id="home" />
      <HomeThreeColumns />
      <HomeSteps id="steps" />
      <HomeAbout id="about" />
      <HomeHelp id="help" />
      <Footer id="footer"/>
    </div>
  );
}
