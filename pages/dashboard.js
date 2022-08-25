import React from "react";
import styles from "../styles/dashboard.module.css";
import Head from "next/head";
import Link from "next/link";
import PieChart from "../components/Dashboard/PieChart";
import LineChart from "../components/Dashboard/LineChart";
import DeviceCard from "../components/Dashboard/DeviceCard";
import PayCard from "../components/Dashboard/PayCard";
import PendingCard from "../components/Dashboard/PendingCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
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
        Welcome back, <span className={styles.sub}>User</span> !
      </div>
      <div className={styles.titleRow}>
        <div className={styles.sub2}>THIS MONTH</div>
        <div className={styles.sub4}>18% Up from Last Month</div>
        <div className={styles.sub3}>RECOMMENDED</div>
      </div>
      <div className={styles.mainCont1}>
        <div className={styles.chartCont}>
          <PieChart unit1={200} unit2={50} unit3={100} unit4={150} />
        </div>
        <div className={styles.mainCont}>
          <div className={styles.chartCont}>
            <PieChart unit1={150} unit2={40} unit3={80} unit4={130} />
          </div>
        </div>
      </div>

      <div className={styles.sub3}>COMPARISION</div>
      <div className={styles.mainCont1}>
        <div className={styles.chartCont}>
          <LineChart
            unit1={0.4}
            unit2={0.5}
            unit3={0.6}
            unit4={0.8}
            xAxis="Week"
            yAxis="Usage"
            title1="Week 1"
            title2="Week 2"
            title3="Week 3"
            title4="Week 4"
          />
        </div>

        <div className={styles.chartCont}>
          <LineChart
            unit1={0.5}
            unit2={0.9}
            unit3={1}
            unit4={1.5}
            xAxis="Past Month"
            yAxis="Usage"
            title1="May"
            title2="June"
            title3="July"
            title4="August"
          />
        </div>
      </div>
      <div className={styles.sub3}>DEVICES</div>
      <div className={styles.deviceCardRow}>
        <DeviceCard
          title2={"Delhi Public School Noida"}
          desc2={"Warranty Period 2 Months Left"}
          title3={"Using Since"}
          desc3={"4 months"}
          buttonText={"Report Issues"}
          link={"/issues"}
        />
      </div>
      <div className={styles.sub3}>ORDERS</div>
      <div className={styles.deviceCardRow}>
        <DeviceCard
          title2={"Cost "}
          desc2={"Rs "}
          title3={"Ordered on"}
          desc3={"15 July, 2022"}
          buttonText={"Re Order"}
          link={"/pay"}
        />
      </div>
      <div className={styles.sub3}>BILLS</div>
      <div className={styles.payRow}>
        <PayCard />
        <PendingCard />
      </div>
      <div className={styles.submitDiv1}>
        <Link href="/previous">
          <button id={styles.submit1}>View Previous Month Data</button>
        </Link>
        <Link href="/add">
          <button id={styles.submit1}>Add New Device</button>
        </Link>
      </div>
    </div>
  );
}
