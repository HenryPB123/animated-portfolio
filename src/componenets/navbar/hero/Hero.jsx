import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HENRY PERALTA BRICEÑO</motion.h2>
          <motion.h1 variants={textVariants}>Web Fullstack Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See my latest work
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="img" variants={textVariants} />
        </motion.div>
      </div>
      <div className="slidingTextContainer">Web Developer</div>
      <div className="imageContainer">
        <img src="/hero.png" alt="img" />
      </div>
    </div>
  );
};

export default Hero;
