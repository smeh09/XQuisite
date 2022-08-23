import styles from "../styles/auth.module.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id={styles.fullContainer}>
      <div id={styles.container}>
        <div className={styles.heading}>
          Ready for <span id={styles.gradient}>future</span>?
        </div>
        <div className={styles.heading} id={styles.heading2}>
          Login.
        </div>
        <div id={styles.signCnt}>
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
        <button id={styles.submit}>Login!</button>
      </div>
    </div>
  );
}
