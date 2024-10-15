import styles from "./HeroStyles.module.css";
import heroimg from "../../assets/hero.jpg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import CV from "../../assets/cv.pdf"
function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroimg}
          alt="Profile picture of Harsh Gangwal"
        />
      </div>

      <div className={styles.info}>
        <h1>
          Harsh <br />Gangwal
        </h1>
        <h2>Frontend Developer</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          labore nesciunt optio facere voluptate nobis quas minima quidem
          recusandae temporibus. Repudiandae expedita totam quod distinctio,
          quas nesciunt ducimus architecto placeat.
        </p>
        <span>
          <a href="https://linkedin.com" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </span>
        
        <a href={CV} download>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
