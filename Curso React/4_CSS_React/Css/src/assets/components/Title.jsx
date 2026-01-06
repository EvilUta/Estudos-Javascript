import styles from "./Title.module.css";

const Title = () => {
  return (
    <div>
      <h1 className={styles.myTitle}>Meu título estilizado por CSS Module</h1>
      <p className={styles.myParagraph}>Parágrafo com CSS Module</p>
    </div>
  );
};

export default Title;
