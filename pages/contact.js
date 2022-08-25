import React from "react";
import ContactBox from "../components/Contact/ContactBox";

import styles from "../styles/contact.module.css";

export default function ContactPage() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.heading}>Contact Us</div>
        <ContactBox />
      </div>
    </>
  );
}
