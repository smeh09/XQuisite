import React from "react";
import styles from "../../styles/cards.module.css";

export default function PayCard() {
  return (
    <div>
      <div className={styles.payCard}>
        <div className={styles.cardHead}>AUGUST</div>
        <div className={styles.cardSub}>From Lectricus 2.0</div>
        <div className={styles.cardHead}>Total Cost</div>
        <div className={styles.cardSub}>Rs 12,000</div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.row}>
              <img src="/icons/clock.svg" className={styles.icon}></img>
              <div className={styles.cardHead1}>Pending On</div>
            </div>
            <div className={styles.cardSub}>15 September, 2022</div>
          </div>
        </div>
        <div className={styles.submitDiv1}>
          <button id={styles.submit}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}
