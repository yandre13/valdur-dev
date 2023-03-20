import { useEffect } from 'react'
import gsap from "gsap";

export default function Circles({ children }) {

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.to(".circles", {
      duration: 10,
      rotation: 360,
      repeat: -1,
      ease: "none",
    })
      .to(".circles .ball", {
        duration: 3,
        scale: function (index) {
          if (index === 0) return 1.3
          if (index === 1) return 1.6
          if (index === 2) return 0.7
        },
        repeat: -1,
        yoyo: true,
        ease: "none",
      }, 0)

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="gpap-circles">
      {children}
      <div className="circles">
        <div className="ball ball-yellow"></div>
        <div className="ball ball-purple"></div>
        <div className="ball ball-orange"></div>
      </div>
    </div>
  )
}
