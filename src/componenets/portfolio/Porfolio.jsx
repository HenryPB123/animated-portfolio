import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project One",
    img: "https://images.pexels.com/photos/217250/pexels-photo-217250.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tenetur accusantium iure necessitatibus ipsa voluptates sint, doloribus nobis magnam minima laborum repudiandae corporis autem perspiciatis quis eos velit quos dignissimos?",
  },
  {
    id: 2,
    title: "Project Two",
    img: "https://images.pexels.com/photos/18876570/pexels-photo-18876570/free-photo-of-geco.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tenetur accusantium iure necessitatibus ipsa voluptates sint, doloribus nobis magnam minima laborum repudiandae corporis autem perspiciatis quis eos velit quos dignissimos?",
  },
  {
    id: 3,
    title: "Project Three",
    img: "https://images.pexels.com/photos/18642137/pexels-photo-18642137/free-photo-of-edificios-entrenar-pista-transporte.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tenetur accusantium iure necessitatibus ipsa voluptates sint, doloribus nobis magnam minima laborum repudiandae corporis autem perspiciatis quis eos velit quos dignissimos?",
  },
  {
    id: 4,
    title: "Project Four",
    img: "https://images.pexels.com/photos/14792749/pexels-photo-14792749.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tenetur accusantium iure necessitatibus ipsa voluptates sint, doloribus nobis magnam minima laborum repudiandae corporis autem perspiciatis quis eos velit quos dignissimos?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer">
            <img src={item.img} alt="img" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Porfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Porfolio;
