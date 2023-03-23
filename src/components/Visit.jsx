import { useEffect, useRef } from "react";
// Icons
import linkedin from "../assets/svg/linkedin.svg";
import dribble from "../assets/svg/dribble.svg";
import behance from "../assets/svg/behance.svg";

const styles = {
  position: 'absolute',
  top: 150,
  right: 24,
}

export default function Visit({ fixed }) {

  const ref = useRef(null)
  useEffect(() => {
    //get height of entire document
    if (fixed) {
      const height = document.documentElement.scrollHeight - window.innerHeight
      ref.current.style.height = `${height - 200}px`
    }
  }, [fixed])

  return (
    <div ref={ref} className={fixed ? "visitFixed" : ''} style={fixed ? styles : {}}>
      <div className={`social-media ${fixed ? 'fixed' : ''}`}>
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
    </div>
  )
}
