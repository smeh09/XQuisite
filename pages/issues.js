import { useState } from "react";
import styles from "../styles/issues.module.css";

export default function Issues() {
  const [id, setId] = useState("");
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={styles.head}>
          report<span className={styles.head1}>/issues</span>
        </div>
        <img src="/icons/dots.svg" className={styles.img}></img>
      </div>
      <div className={styles.sub1}>
        Write us about your problems and we will contact you soon !
      </div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Your Problem"
        className={styles.input1}
      />

      <div className={styles.submitRow}>
        <button id={styles.submit}>Submit</button>
      </div>
    </div>
  );
}
