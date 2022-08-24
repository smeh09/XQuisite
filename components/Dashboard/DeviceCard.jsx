/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/dashboard.module.css";
import Link from "next/link";

export default function DeviceCard({
  title2,
  desc2,
  title3,
  desc3,
  buttonText,
  link,
}) {
  return (
    <div className={styles.card}>
      <img src="/imgs/testImg.jpg" alt="img" className={styles.img}></img>
      <div className={styles.mainRow}>
        <div className={styles.cardHead}>Lectricus 2.0</div>
        <div className={styles.cardSub}>Current Device</div>
        <div className={styles.cardHead}>{title2}</div>
        <div className={styles.cardSub}>{desc2}</div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.row}>
              <img src="/icons/clock.svg" className={styles.icon}></img>
              <div className={styles.cardHead1}>{title3}</div>
            </div>
            <div className={styles.cardSub}>{desc3}</div>
          </div>
        </div>
        <div className={styles.submitDiv}>
          <Link href={link}>
            <button id={styles.submit}>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
