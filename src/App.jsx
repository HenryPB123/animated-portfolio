import "./app.scss";

import Navbar from "./componenets/navbar/Navbar";
import Hero from "./componenets/hero/Hero";
import Paralax from "./componenets/parallax/Paralax";
import Services from "./componenets/servicess/Services";
import Porfolio from "./componenets/portfolio/Porfolio";
import Contact from "./componenets/contact/Contact";
import Cursor from "./componenets/cursor/Cursor";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Servises">
        <Paralax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Paralax type="portfolio" />
      </section>
      <Porfolio />{" "}
      <section id="Contact">
        <Contact />
      </section>
      {/* <section id="About">About</section>
      <section id="Curriculum">Curriculum</section>
      <section id="Skills">Skills</section> */}
    </div>
  );
}

export default App;
