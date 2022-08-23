/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/home.module.css";

export default function FeatureCard({ title, iconPath, desc }) {
  return (
    <div className={styles.featureCardDiv}>
      <div className={styles.featureRow1}>
        <img src={iconPath} alt="icon" className={styles.featureCardIcon}></img>
        <div className={styles.featureCardHeading}>{title}</div>
      </div>
      <div className={styles.featureCardDesc}>{desc}</div>
    </div>
  );
}
