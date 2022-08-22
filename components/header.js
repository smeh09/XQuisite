import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log();
  return (
    <header id={styles.header}>
      <div id={styles.title}>Lectricus</div>
      <nav id={styles.nav1} className={styles.nav}>
        <Link href="/">
          <div
            className={styles.navTxt}
            id={router.pathname == "/" ? styles.selected : styles.nonSelected}
          >
            Home
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={styles.navTxt}
            id={
              router.pathname == "/contact"
                ? styles.selected
                : styles.nonSelected
            }
          >
            Contact Us
          </div>
        </Link>
        <Link href="/products">
          <div
            className={styles.navTxt}
            id={
              router.pathname == "/products"
                ? styles.selected
                : styles.nonSelected
            }
          >
            Products
          </div>
        </Link>
      </nav>
      <nav id={styles.nav2} className={styles.nav}>
        <Link href="/">
          <div className={styles.navTxt} id={styles.loginTxt}>
            Login
          </div>
        </Link>
        <Link href="/contact">
          <button id={styles.specialLnk}>Get started</button>
        </Link>
      </nav>
    </header>
  );
}
