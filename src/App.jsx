import "./app.scss";

import Navbar from "./componenets/navbar/Navbar";
import Hero from "./componenets/navbar/hero/Hero";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">About</section>
      <section id="Portfolio">Portfolio</section>
      <section>Porfolio1</section>
      <section>Porfolio2</section>
      <section>Porfolio3</section>
      <section id="Curriculum">Curriculum</section>
      <section id="Skills">Skills</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
