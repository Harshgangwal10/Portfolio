import styles from "./ProjectStyles.module.css";
import news from "../../assets/news.png";
import ProjectCard from "../../common/ProjectCard";

function Project() {
  return (
    <section id="project" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={news}
          link={"https://github.com/Harshgangwal10/News-App"}
          h3="News Web App"
          p=" Interactive News web Application"
        />
          <ProjectCard
          src={news}
          link={"https://github.com/Harshgangwal10/News-App"}
          h3="News Web App"
          p=" Interactive News web Application"
        />
      </div>
    </section>
  );
}

export default Project;
