/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/products.module.css";

export default function ProductCard() {
  return (
    <div className={styles.productCard}>
      <img src="/imgs/testImg.jpg" alt="img" className={styles.img}></img>
      <div className={styles.cardHead}>Lectricus 1.0</div>
      <div className={styles.cardSub}>Latest</div>
      <div className={styles.cardHead}>Delievered By</div>
      <div className={styles.cardSub}>29 August, 2022</div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.cardHead}>Ratings</div>
          <div className={styles.cardSub}>4.5 Stars</div>
        </div>
        <div className={styles.column1}>
          <div className={styles.cardHead}>Cost</div>
          <div className={styles.cardSub}>Rs - XXXXX</div>
        </div>
      </div>
      <div className={styles.submitDiv}>
        <button id={styles.submit}>Order Now</button>
      </div>
    </div>
  );
}
