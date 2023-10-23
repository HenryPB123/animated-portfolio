import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <Sidebar/> */}
      <div className="wrapper">
        <span>Henry Peralta Briceño</span>
        <div className="social">
          <a href="#">
            <img
              src="https://img.icons8.com/3d-fluency/94/linkedin.png"
              alt="linkedin"
            />
          </a>

          <a href="#">
            <img
              src="https://img.icons8.com/3d-fluency/94/github.png"
              alt="github"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/fluency/48/whatsapp.png"
              alt="whatsapp"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/3d-fluency/94/mail.png"
              alt="mail"
            />
          </a>
          <a href="#">
            <img
              src="https://pbs.twimg.com/profile_images/1542845396032135168/o5AmaQyh_400x400.jpg"
              alt="mail"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
