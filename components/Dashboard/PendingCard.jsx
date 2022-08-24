import React from "react";
import styles from "../../styles/cards.module.css";

export default function PendingCard() {
  return (
    <div>
      <div className={styles.payCard}>
        <div className={styles.cardHead}>JULY</div>
        <div className={styles.cardSub}>From Lectricus 2.0</div>
        <div className={styles.cardHead}>Total Cost</div>
        <div className={styles.cardSub}>Rs 11,700</div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.row}>
              <img src="/icons/clock1.svg" className={styles.icon}></img>
              <div className={styles.cardHead2}>Pending On</div>
            </div>
            <div className={styles.cardSub2}>15 August, 2022</div>
            <div className={styles.cardSub2}>Fine - Rs 2,000</div>
          </div>
        </div>
        <div className={styles.submitDiv}>
          <button id={styles.submit}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}
