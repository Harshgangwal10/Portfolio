import styles from './Aboutstyles.module.css';
import AboutSection from '../../common/AboutSection';

function About() {
  return (
    <section id='about' className={styles.container}>
      <div className={styles.title}>
        <h1>About Me</h1>
      </div>
      <div className={styles.content}>
        <AboutSection
          h4="👋 Who Am I?"
          p="I'm a pre-final year Computer Science student passionate about web development, focused on creating user-friendly websites."
        />
        <AboutSection
          h4="💻 Front-End Development"
          p="I specialize in HTML, CSS, JavaScript, and React, crafting responsive and intuitive user interfaces."
        />
        <AboutSection
          h4="🔧 Back-End Knowledge"
          p="I have intermediate experience with Node.js and SQL, enabling contributions to full-stack development."
        />
        <AboutSection
          h4="🛠 Version Control & Collaboration"
          p="Proficient in Git, I thrive in collaborative environments and enjoy teamwork to solve problems effectively."
        />
        <AboutSection
          h4="📚 Continuous Learning"
          p="Dedicated to continuous learning, I strive to stay updated with the latest web development technologies and trends."
        />
      </div>
    </section>
  );
}

export default About;
