import "./app.scss";

import Navbar from "./componenets/navbar/Navbar";
import Hero from "./componenets/hero/Hero";
import Paralax from "./componenets/parallax/Paralax";
import Services from "./componenets/servicess/Services";

function App() {
  return (
    <div>
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
      <section>Porfolio1</section>
      <section>Porfolio2</section>
      <section>Porfolio3</section>
      <section id="About">About</section>
      <section id="Curriculum">Curriculum</section>
      <section id="Skills">Skills</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
