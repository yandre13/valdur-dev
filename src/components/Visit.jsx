// Icons
import linkedin from "../assets/svg/linkedin.svg";
import dribble from "../assets/svg/dribble.svg";
import behance from "../assets/svg/behance.svg";

export default function Visit() {
  return (
    <div className="social-media">
      <p>
        Visit me:
      </p>
      <ul className="social-media__list">
        <li>
          <a href="#"><img src={linkedin} alt="Linkedin" /></a>
        </li>
        <li>
          <a href="#"><img src={dribble} alt="Dribble" /></a>
        </li>
        <li>
          <a href="#"><img src={behance} alt="Behance" /></a>
        </li>
      </ul>
    </div>
  )
}
