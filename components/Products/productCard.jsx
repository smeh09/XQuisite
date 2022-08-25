/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/products.module.css";

export default function ProductCard({ name, path, cost }) {
  const today = new Date();
  const dd = String(today.getDate() + 1).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const date = dd + "/" + mm + "/" + yyyy;

  return (
    <div className={styles.productCard}>
      <img src={path} alt="img" className={styles.img}></img>
      <div className={styles.cardHead}>{name}</div>
      <div className={styles.cardSub}>Latest</div>
      <div className={styles.cardHead}>Delievered By</div>
      <div className={styles.cardSub}>{date}</div>
      <div className={styles.rows}>
        <div className={styles.column}>
          <div className={styles.cardHead}>Ratings</div>
          <div className={styles.cardSub}>4.5 Stars</div>
        </div>
        <div className={styles.column1}>
          <div className={styles.cardHead}>Cost</div>
          <div className={styles.cardSub}>{cost}</div>
        </div>
      </div>
      <div className={styles.submitDiv}>
        <button id={styles.submit}>Order Now</button>
      </div>
    </div>
  );
}
