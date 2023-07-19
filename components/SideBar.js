import styles from "../styles/Navbar.module.css";
import Link from "next/link";
export default function SideBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <Link href="/activos">
          <li>Activos</li>
        </Link>
        <Link href="/riesgos">
          <li>Riesgos</li>
        </Link>
        <Link href="/vulnerabilidades">
          <li>Vulnerabilidades</li>
        </Link>
        <Link href="/amenzas">
          <li>Amenazas</li>
        </Link>
        <Link href="/controles">
          <li>Controles</li>
        </Link>
        <Link href="/riesgos">
          <li>Riesgos</li>
        </Link>
      </ul>
    </nav>
  );
}
