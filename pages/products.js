import React from "react";
import ProductCard from "../components/Products/productCard";
import styles from "../styles/products.module.css";
import Footer from "../components/Footer";
import Head from "next/head";

export default function products() {
  return (
    <div id={styles.container}>
      <Head>
        <title>Products - Lectricus</title>
      </Head>
      <div className={styles.heading}>
        Check out, these <span className={styles.sub}>Products</span> !
      </div>
      <div className={styles.productRow}>
        <ProductCard
          name="Lectricus 1.0"
          path="https://media.discordapp.net/attachments/950077830799183893/1012314019631222874/unknown.png"
        />
        <ProductCard
          name="Lectricus 2.0"
          path="https://media.discordapp.net/attachments/950077830799183893/1012314051897999420/unknown.png"
        />
        <ProductCard
          name="Lectricus 3.0"
          path="https://media.discordapp.net/attachments/950077830799183893/1012314097850789928/unknown.png"
        />
        <ProductCard
          name="Custom Lectricus"
          path="https://media.discordapp.net/attachments/950077830799183893/1012314137545682994/unknown.png"
        />
      </div>
      <div className={styles.lastText}>
        Contact us for{" "}
        <span className={styles.sub} id={styles.sub2}>
          Customized
        </span>{" "}
        builds
      </div>
    </div>
  );
}
