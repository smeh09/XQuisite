import React from "react";
import ContactBox from "../components/Contact/ContactBox";
import Head from "next/head";

import styles from "../styles/contact.module.css";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Lectricius</title>
      </Head>
      <div className={styles.contact}>
        <div className={styles.heading}>Contact Us</div>
        <ContactBox />
      </div>
    </>
  );
}
