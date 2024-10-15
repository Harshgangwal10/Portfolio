import styles from "./HeroStyles.module.css";
import heroimg from "../../assets/hero.jpg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import RESUME from "../../assets/resume.pdf"

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
        I am a pre-final year Computer Science student with a focus on frontend development, skilled in HTML, CSS, JavaScript, and React for building responsive web applications.
        </p>
        <span>
          <a href="https://linkedin.com" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
        
        </span>
        
        <a href={RESUME}>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
