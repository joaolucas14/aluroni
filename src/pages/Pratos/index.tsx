import styles from "./Pratos.module.scss";
import { useLocation } from "react-router-dom";

export default function Pratos() {
  console.log(useLocation());
  return (
    <div className={styles.container}>
      <h1>Pratos</h1>
    </div>
  );
}
