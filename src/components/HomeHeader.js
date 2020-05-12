import React from "react";
import Navigation from "./Navigation";
import HeaderHero from "./HeaderHero";
import heroImage from '../assets/Home-Hero-Image.jpg';

export default function HomeHeader() {
  return (
    <header>
      <div className="wrapper">
        <Navigation />
        <img className="hero-image" src={heroImage} alt="decoration"/>
        <HeaderHero />
      </div>
    </header>
  );
}
