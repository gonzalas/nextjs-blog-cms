import Link from "next/link";
import styles from "../styles/Navigation.module.css";

const Navigation = () => (
  <nav className={styles.navbar}>
    <div className={styles.header}>
      <Link href="/">
        <h2>Talento FC</h2>
      </Link>
    </div>
    <div className={styles.linksBox}>
      <Link href="/">
        <a className={styles.links}>Inicio</a>
      </Link>

      <Link href="/about">
        <a className={styles.links}>Institución</a>
      </Link>

      <Link href="/notes">
        <a className={styles.links}>Notas</a>
      </Link>

      <Link href="/store">
        <a className={styles.links}>Tienda</a>
      </Link>
    </div>
  </nav>
);

export default Navigation;
