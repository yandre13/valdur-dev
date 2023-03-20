import arrow from '../assets/svg/arrow.svg';
import arrow2 from '../assets/svg/arrow2.svg';

export default function Arrow({ v2, customClass }) {

  return (
    <div className={`arrow ${customClass ?? ''}`}>
      <img src={v2 ? arrow2 : arrow} alt="Arrow" />
    </div>
  )
}