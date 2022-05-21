import styles from "../../styles/views/Home.module.css";
import { About } from "./About";

export const HomeView = () => {
  return (
    <>
      <div className={styles.home_container}>
        <div className={styles.home_background}>
          <div className={styles.home_content}>
            <h1 className={styles.home_title}>TITLE</h1>
            <p className={styles.home_ubtitle}>Subtitle</p>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};
