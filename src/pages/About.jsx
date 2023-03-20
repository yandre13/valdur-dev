import { Link } from "react-router-dom";
import Card from "../components/Card";
import Tools from "../components/Tools";
import Visit from "../components/Visit";

import letter from "../assets/svg/letter.svg";
import play from "../assets/svg/play.svg";

import Circles from "../components/Circles";

//icons

export default function About() {
  return (
    <main>

      {/* <Balls /> */}
      <section className="AboutPage About container">
        <div className="image">
          <img className="photo" src="/img/AboutPhoto.png" alt="About me" />
        </div>

        <div className="about-text">
          <h1 className="title-section">
            About me<span className="text-orange">.</span>
          </h1>

          <p className="description-section text-justify">
            With more than 5 years of experience, with a strong background in digital products. I am dedicated to working closely with clients to understand their needs and preferences, and I am always open to feedback to ensure that the end result is a product that exceeds expectations. Whether it's a website, mobile app, or physical product, I am confident in my ability to create designs that make a lasting impact.
          </p>

          <Tools customClass="paddings" />

          <Link className="main-button" to="/about-me">
            Send me a message
          </Link>
        </div>
      </section>


      <section className="LetsTalk container">

        <div className="lets-talk-text">
          <h3 className="title-section">
            <span className="font-rainbow text-trans-initial">Let’s talk</span> about the next big thing
          </h3>

          <p className="description-section">
            If you have other requests or questions about projects, don’t hesitate to email me at <span className="font-bold">hi@valdurdesign.com</span> or send me a message.
          </p>

          <div className="button-container">
            <button className="main-button">Send a message</button>
          </div>
        </div>

        <Visit />

      </section>
    </main>
  );
}