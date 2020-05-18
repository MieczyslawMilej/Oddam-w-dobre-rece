import React from "react";

import decoration from "../assets/Decoration.svg";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";

export default function Footer() {
  return (
    <section className="footer">
      <div className="wrapper">
        <h1 className="heading">Skontaktuj się z nami</h1>
        <img src={decoration} alt="decoration" />
        <form action="#">
          <div className="row ">
            <label>
              Wpisz swoje imię
              <input name="fullname" type="text" placeholder="Krzysztof" />
            </label>
            <label>
              Wpisz swój email
              <input name="email" type="text" placeholder="abc@xyz.pl" />
            </label>
          </div>
          <label>
            Wpisz swoją wiadomość
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </label>
          <input type="submit" value="Wyślij" className="btn"/>
        </form>
      </div>
      <p className="bottom-text">Copyright by Coderslab</p>
      <div className="footer-links">
        <a href="https://www.facebook.com/CodersLabSzkolaIT/" target="_blank"  rel="noreferrer noopener ">
          <img className="icon-facebook" src={facebook} alt="decoration" />
        </a>
        <a href="https://www.instagram.com/coders.lab/?hl=en" target="_blank"  rel="noreferrer noopener ">
          <img className="icon-instagram" src={instagram} alt="decoration" />
        </a>
      </div>
    </section>
  );
}
