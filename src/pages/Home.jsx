import { Link } from "react-router-dom";
import Card from "../components/Card";
import Tools from "../components/Tools";
import Visit from "../components/Visit";

import letter from "../assets/svg/letter.svg";
import play from "../assets/svg/play.svg";
import Balls from "../components/Balls";
import Circles from "../components/Circles";

export default function Home() {
  return (
    <main>
      <section className="Hero container">
        <Circles>
          <img className="photo" src="/img/fotoprueba1.png" alt="Ingrid Valdera" />
        </Circles>

        <div className="hero-text">
          <h2 className="title">
            <span>
              Hi, I’m Ingrid<span className="text-purple">.</span>
            </span>
            <span className="subtitle">
              A <span className="font-rainbow">product</span> designer
            </span>
          </h2>
          <div className="description">
            <div className="badge">
              <div className="dot"></div>
              <span>Online</span>
            </div>
            CURRENTLY <span className="font-bold">AVAILABLE</span> FOR FREELANCE WORLDWIDE.
          </div>
        </div>
      </section>

      <Balls />
      <section className="About container">
        <div className="image">
          <img className="photo" width="608" height="658" src="/img/about.png" alt="About me" />
        </div>

        <div className="about-text">
          <h3 className="title-section">
            About me<span className="text-orange">.</span>
          </h3>

          <p className="description-section">
            My design philosophy is to create products that solve real-world problems, while keeping the end user in mind. My goal is to create products that not only look great, but also <span className="font-bold">enhance the user's experience.</span>
          </p>

          <div className="experience">
            <div className="experience__item">
              <span className="number">
                5+
              </span>
              <span className="text">
                Years
                Experience
              </span>
            </div>
            <div className="experience__item">
              <span className="number">
                23+
              </span>
              <span className="text">
                Worked
                Projects
              </span>
            </div>
            <div className="experience__item">
              <span className="number">
                17+
              </span>
              <span className="text">
                Satisfied
                Clients
              </span>
            </div>
          </div>

          <Link className="main-button" to="/about-me">
            Find more
          </Link>
        </div>
      </section>

      <section className="Projects container">

        <div className="projects-text">
          <h3 className="title-section">
            My Projects<span className="text-orange">.</span>
          </h3>

          <p className="description-section">
            You will find my latest work, whether it's personal projects, collaborations, or professional endeavors. I believe that sharing, is the best way to inspire others and to grow as a <span className="font-bold">creative individual.</span> I hope you enjoy browsing through my portfolio!
          </p>

          <Tools />

          <Link className="main-button" to="/about-me">
            Find more
          </Link>
        </div>
        <div className="gallery">
          <Card title="Ux Case Study RIMAC insurances" image="/img/card1.png" link="#" />
          <Card title="Ux Case Study RIMAC insurances" image="/img/card1.png" link="#" customClass="top264" />
          <Card title="Ux Case Study RIMAC insurances" image="/img/card1.png" link="#" />
          <Card title="Ux Case Study RIMAC insurances" image="/img/card1.png" link="#" customClass="top264" />
        </div>
      </section>

      <section className="Accessibility">
        <div className="container">
          <p className="accessibility-text">
            Accessibility is essential in design for creating an <span className="text-yellow text-nowrap">inclusive and diverse</span> community.
          </p>
          <div className="text-play">
            <img className="letter" src={letter} alt="Made with love" />
            <img className="icon" src={play} alt="Play" />
          </div>
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