import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on help your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="img" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Bussines.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            dolore natus soluta ex ut voluptatum ullam delectus animi nihil
            ratione minus ipsa autem unde hic nesciunt eum beatae vitae?
            Eveniet!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            dolore natus soluta ex ut voluptatum ullam delectus animi nihil
            ratione minus ipsa autem unde hic nesciunt eum beatae vitae?
            Eveniet!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            dolore natus soluta ex ut voluptatum ullam delectus animi nihil
            ratione minus ipsa autem unde hic nesciunt eum beatae vitae?
            Eveniet!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            dolore natus soluta ex ut voluptatum ullam delectus animi nihil
            ratione minus ipsa autem unde hic nesciunt eum beatae vitae?
            Eveniet!
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
