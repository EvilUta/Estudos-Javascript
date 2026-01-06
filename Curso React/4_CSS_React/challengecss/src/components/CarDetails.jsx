import styles from "./CarDetails.module.css";

const CarDetails = ({ brand, km, color, isNew }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{brand}</h2>

      {/* classe dinâmica usando if ternário */}
      <p className={isNew ? styles.newCar : styles.usedCar}>
        {isNew ? "Carro Novo" : "Carro Usado"}
      </p>

      <p className={styles.item}>Km: {km}</p>
      <p className={styles.item}>Cor: {color}</p>
    </div>
  );
};

export default CarDetails;
