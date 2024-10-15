import "./App.css";
import Hero from "./sections/Hero/Hero";
import Project from "./sections/Projects/Project";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import About from "./sections/About/About";

function App() {
  return (
    <>
      <Header/> 
      <Hero />
      <About/>
      <Project />
      <Skills/> 
      <Contact/> 
       <Footer/> 
    </>
  );
}

export default App;
