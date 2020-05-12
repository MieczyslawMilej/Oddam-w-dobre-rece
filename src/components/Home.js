import React from "react";

import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeHelp from "./HomeHelp";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="Home">
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSteps />
      <HomeAbout />
      <HomeHelp />
      <Footer />
    </div>
  );
}
