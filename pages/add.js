import { useEffect, useState } from "react";
import styles from "../styles/add.module.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Add() {
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
    <div className={styles.container}>
      <Head>
        <title>Add - Lectricus</title>
      </Head>
      <div className={styles.heading}>
        Add a new <span className={styles.sub}>Product</span>
      </div>
      <div className={styles.sub1}>
        Enter your products UID to add it into your list to get personlized data
      </div>
      <div className={styles.sub2}>
        The UID is found at the back of the product as a 10 Digit Number code.
        For example - 1009283910
      </div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter UID"
        className={styles.input1}
      />

      <div className={styles.submitRow}>
        <Link href="/dashboard">
          <button id={styles.submit}>Add</button>
        </Link>
      </div>
    </div>
  );
}
