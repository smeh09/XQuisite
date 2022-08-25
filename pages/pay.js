/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/pay.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Pay() {
  const [no, setNo] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const router = useRouter();
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token == "undefined") {
      setIsSignedIn(false);
      router.push("/");
    } else {
      setIsSignedIn(true);
    }
  });
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
          <div className={styles.cardHead1}>Total Cost</div>
          <div className={styles.cardSub}>Rs 12,000</div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.row} id={styles.headRow}>
                <img src="/icons/clock.svg" className={styles.icon}></img>
                <div className={styles.cardHead1}>Pending On</div>
              </div>
              <div className={styles.cardSub}>15 September, 2022</div>
            </div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.sideTitle}>Card Details</div>
          <input
            value={no}
            onChange={(e) => setNo(e.target.value)}
            type="text"
            placeholder="Card Number"
            className={styles.input}
          />
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            placeholder="Card CVV"
            className={styles.input}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Card Holder Name"
            className={styles.input}
            id={styles.lastInput}
          />
        </div>
      </div>
      <div className={styles.submitRow}>
        <button id={styles.submit}>Pay and Zap</button>
      </div>
    </div>
  );
}
