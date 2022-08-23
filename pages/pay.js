/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/pay.module.css";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Pay() {
  return (
    <div>
      <Head>
        <title>Pay - Lectricus</title>
      </Head>
      <div className={styles.heading}>
        Pay Your <span className={styles.sub}>Bill</span>
      </div>
      <div className={styles.sub1}>
        Pay your bills through us and get 10% off
      </div>
      <div className={styles.sub2}>PAYMENT DETAILS</div>
      <div className={styles.mainRow}>
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
        </div>
        <div>
          <div className={styles.sideText}>
            Our AI is taking your card details from previous orders.
          </div>
          <div className={styles.sideText1}>
            To Change <span className={styles.sub}>Card</span> Click Here
          </div>
        </div>
      </div>
      <div className={styles.submitRow}>
        <button id={styles.submit}>Pay and Zap</button>
      </div>
      <Footer />
    </div>
  );
}
