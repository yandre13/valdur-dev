import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function Balls() {


  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const trans1 = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [0, -200]
  )
  const trans2 = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [0, -400]
  )
  const y1 = useSpring(trans1, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const y2 = useSpring(trans2, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  return (
    <section className="Balls container" ref={ref}>

      <motion.div className="ball ball-1 ball-yellow ball-md" style={{
        translateY: y1
      }}></motion.div>
      <motion.div className="ball ball-2 ball-purple ball-sm" style={
        {
          translateY: y2
        }
      }></motion.div>
      <motion.div className="ball ball-3 ball-orange ball-lg"
        style={{
          translateY: y1
        }}
      ></motion.div>

      <motion.div className="ball ball-4 ball-purple ball-lg"
        style={{
          translateY: y2
        }}
      ></motion.div>
      <motion.div className="ball ball-5 ball-yellow ball-sm"
        style={{
          translateY: y1
        }}
      ></motion.div>
      <motion.div className="ball ball-6 ball-red ball-md"
        style={{
          translateY: y2
        }}
      ></motion.div>

      <motion.div className="ball ball-7 ball-purple ball-md"
        style={{
          translateY: y1
        }}
      ></motion.div>
      <motion.div className="ball ball-8 ball-yellow ball-lg"
        style={{
          translateY: y2
        }}
      ></motion.div>
      <motion.div className="ball ball-9 ball-orange ball-sm"
        style={{
          translateY: y1
        }}
      ></motion.div>

    </section>
  )
}
