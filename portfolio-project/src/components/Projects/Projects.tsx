import ProjectCard from "./ProjectCard";
import defaultImage from "../../assets/pascal-bullan-6njkAeHHMOE-unsplash.jpg";
import image2 from "../../assets/fons-heijnsbroek-dUUxgKd5vSI-unsplash.jpg";
import styles from "./Projects.module.css";

const Projects = () => {
  const description = "This is the projects section of the portfolio project";

  return (
    <>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.cards}>
          <ProjectCard
            title={"Project 1"}
            description={"lorem"}
            image={defaultImage}
          />
          <ProjectCard title={"Project 2"} description={"lorem"} image={image2} />
          <ProjectCard title={"Project 3"} description={"lorem"} image={defaultImage} />
          <ProjectCard title={"Project 4"} description={"lorem"} image={image2} />
        </div>
      </div>
    </>
  );
};

export default Projects;
