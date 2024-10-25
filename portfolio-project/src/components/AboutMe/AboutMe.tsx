import styles from "./AboutMe.module.css";
import defaultImage from "../../assets/fons-heijnsbroek-dUUxgKd5vSI-unsplash.jpg";

const AboutMe = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ullam voluptatum autem quam, neque porro nostrum amet commodi consectetur minus qui culpa rem tempore quis non, ut assumenda error quidem.";

  return (
    // <section>
    //     <h2>About Me</h2>
    //     <p>{description}</p>
    // </section>
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.about}>About Me</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.right}>
        <img src={defaultImage} alt="default" className={styles.image} />
      </div>
    </div>
  );
};

export default AboutMe;
