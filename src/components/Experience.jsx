import { useState } from "react";
import up from "../assets/svg/up.svg";

function Item() {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
    console.log({ open })
  }
  return (
    <li className="experience-item">

      <div className="experience-date">
        <h3>
          Nov 2019 - Present
        </h3>
      </div>

      <div className="experience-container">
        <h4>
          Product Designer
        </h4>
        <div className={`experience-content ${open ? 'active' : ''}`}>
          <h4>
            Encora Inc.
          </h4>
          <ul>
            <li>
              Researching and identifying user needs: Conduct research to understand user needs, preferences, and pain points. Develop products that meet the needs of their target audience.
            </li>
            <li>
              Conceptualizing and prototyping: Create sketches, mockups, and prototypes to visualize and test their ideas. They iterate on their designs based on user feedback and usability testing.
            </li>
            <li>
              Creating detailed product designs: Create detailed drawings and specifications for their designs. They work closely with engineers and other stakeholders to ensure their designs can be produced efficiently and cost-effectively.
            </li>
            <li>
              Collaborating with cross-functional teams: Work with a variety of stakeholders, including engineers, marketers, and project managers, to ensure the successful launch of a product.
            </li>
          </ul>
        </div>
      </div>

      <div className={`button ${open ? 'active' : ''}`} role="button" onClick={handleClick}>
        <img src={up} alt="Arrow" />
      </div>



    </li>
  )
}

export default function Experience() {
  return (
    <section className="Experience container">
      <h3>
        Experience:
      </h3>

      <ul className="experience-list">
        {
          Array(3).fill().map((_, i) => <Item key={i} />)
        }
      </ul>
    </section>
  )
}
