import styles from "../styles/auth.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submit = async () => {
    setLoading(true);
    const res = await fetch("https://localhost:5000/api/user", {
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className={styles.input}
              id={styles.lastInput}
            />
          </div>
          <button id={styles.submit} onClick={submit}>
            Sign Up!
          </button>
        </div>
      </div>
    </>
  ) : (
    <div className="loader"></div>
  );
}
