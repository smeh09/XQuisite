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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
