import styles from "./page.module.css";
import Pokemon from "./components/pokemon";
export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>My Pokemon</h1>
      <Pokemon />
        
    </div>
  );
}
