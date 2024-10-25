import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <>
      <div className={styles.projectCard}>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.bottom}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.date}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
