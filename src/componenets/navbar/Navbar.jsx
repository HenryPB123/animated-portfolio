import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Henry Peralta Briceño
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/henryperaltabriceno">
            <img
              src="https://img.icons8.com/3d-fluency/94/linkedin.png"
              alt="linkedin"
            />
          </a>

          <a href="https://github.com/HenryPB123">
            <img
              src="https://img.icons8.com/3d-fluency/94/github.png"
              alt="github"
            />
          </a>
          <a href="https://wa.link/4ln2yq">
            <img
              src="https://img.icons8.com/fluency/48/whatsapp.png"
              alt="whatsapp"
            />
          </a>
          {/* <a href="#">
            <img
              src="https://img.icons8.com/3d-fluency/94/mail.png"
              alt="mail"
            />
          </a> */}
          {/* <a href="https://www.talent.soyhenry.com/app/me">
            <img
              src="https://pbs.twimg.com/profile_images/1542845396032135168/o5AmaQyh_400x400.jpg"
              alt="mail"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
