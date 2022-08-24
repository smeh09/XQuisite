import styles from "../styles/auth.module.css";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submit = async () => {
    const bodyData = {
      email,
      password,
    };
    setLoading(true);
    const res = await fetch("https://xquisite-backend.herokuapp.com/api/auth", {
      body: JSON.stringify(bodyData),
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      router.push("/add");
    } else {
      alert(data.msg);
    }
    setLoading(false);
  };

  return !loading ? (
    <>
      <Head>
        <title>Login - Lectricus</title>
      </Head>
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
          <button id={styles.submit} onClick={submit}>
            Login!
          </button>
        </div>
      </div>
    </>
  ) : (
    <div className="loader"></div>
  );
}
