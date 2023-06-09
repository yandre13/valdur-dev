
function Icon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.7278 7.93866C10.3376 8.32889 10.3373 8.96146 10.7271 9.35211L14.66 13.2937C15.0495 13.684 15.0495 14.316 14.66 14.7063L10.7271 18.6479C10.3373 19.0385 10.3376 19.6711 10.7278 20.0613L10.9594 20.2929C11.3499 20.6834 11.9831 20.6834 12.3736 20.2929L17.9594 14.7071C18.3499 14.3166 18.3499 13.6834 17.9594 13.2929L12.3736 7.70711C11.9831 7.31658 11.3499 7.31658 10.9594 7.70711L10.7278 7.93866Z" fill="#7678ED" />
    </svg>
  )
}

export default function Card({ title, image, link, tag, customClass }) {
  return (
    <div className={`gallery__item ${customClass || ''}`}>
      {tag && <span className="tag">{tag}</span>}
      <img className="image" src={image} alt={title} />
      <div className="content">
        <h4 dangerouslySetInnerHTML={{ __html: title }} />
        <a href={link} className="button">See more <Icon />
        </a>
      </div>
    </div>
  )
}
