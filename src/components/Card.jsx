import icon from '../assets/svg/icon-download.svg';

export default function Card({ title, image, link, customClass }) {
  return (
    <div className={`gallery__item ${customClass || ''}`}>
      <img className="image" src={image} alt={title} />
      <div className="content">
        <h4>{title}</h4>
        <a href={link} className="button">See more <img width={16} height={16} src={icon} alt="Icon" />
        </a>
      </div>
    </div>
  )
}