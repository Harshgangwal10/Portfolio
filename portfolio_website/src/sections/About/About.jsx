import styles from './AboutStyles.module.css';
import heroimg from "../../assets/hero.jpg";

function About() {
  return (
    <section id='about' className={styles.container}>
<div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroimg}
          alt="Profile picture of Harsh Gangwal"
        />
      </div>

    </section>
  )
}

export default About
