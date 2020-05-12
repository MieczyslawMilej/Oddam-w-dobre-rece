import React from "react";
import Navigation from "./Navigation";
import HeaderHero from "./HeaderHero";

export default function HomeHeader() {
  return (
    <header>
      <div className="wrapper">
        <Navigation />
        <HeaderHero />
      </div>
    </header>
  );
}
