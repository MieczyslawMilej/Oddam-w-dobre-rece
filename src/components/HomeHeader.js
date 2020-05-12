import React from "react";
import Navigation from "./Navigation";
import HeaderHero from "./HeaderHero";
import heroImage from '../assets/Home-Hero-Image.jpg';

export default function HomeHeader() {
  return (
    <header>
      <div className="wrapper">
        <Navigation />
        <HeaderHero />
        <img src={heroImage} alt="decoration"/>
      </div>
    </header>
  );
}
