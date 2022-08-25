import React from "react";
import styles from "../styles/previous.module.css";
import Head from "next/head";
import PieChart from "../components/Dashboard/PieChart";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Previous() {
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
        <title>Dashboard - Lectricus</title>
      </Head>
      <div className={styles.heading}>
        Previous <span className={styles.sub}>Month</span> Data
      </div>
      <div className={styles.sub2}>JULY</div>
      <div className={styles.chartDiv}>
        <PieChart unit1={100} unit2={30} unit3={40} unit4={110} />
      </div>
      <div className={styles.sub2}>JUNE</div>
      <div className={styles.chartDiv}>
        <PieChart unit1={210} unit2={20} unit3={110} unit4={190} />
      </div>
      <div className={styles.sub2}>MAY</div>
      <div className={styles.chartDiv}>
        <PieChart unit1={130} unit2={40} unit3={190} unit4={30} />
      </div>
      <div className={styles.sub3}>No more data before this...</div>
    </div>
  );
}
