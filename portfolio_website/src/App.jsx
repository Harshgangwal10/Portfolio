import "./App.css";
import Hero from "./sections/Hero/Hero";
import Project from "./sections/Projects/Project";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
// import Header from "./sections/Header/Header";
function App() {
  return (
    <>
      {/* <Header/> */}
      <Hero />
      <Project />
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
