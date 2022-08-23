import styles from "../styles/auth.module.css";
import { useState } from "react";
import Head from "next/head";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Head>
        <title>Login - Lectricus</title>
      </Head>
      <div id={styles.fullContainer}>
        <div id={styles.container}>
          <div className={styles.heading}>
            Meet the <span id={styles.gradient}>future</span> of electricity.
          </div>
          <div className={styles.heading} id={styles.heading2}>
            Sign Up.
          </div>
          <div id={styles.signCnt}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className={styles.input}
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className={styles.input}
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className={styles.input}
              id={styles.lastInput}
            />
          </div>
          <button id={styles.submit}>Sign Up!</button>
        </div>
      </div>
    </>
  );
}
