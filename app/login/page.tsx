import React from "react";

import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";

export default function LoginPage() {
  return (
    <div className={`screen`}>
      <Navbar title="Login" isLoginPage />

      <div className={styles.login}>
        <div className={styles.title}>Login</div>
        <div className={styles.form_group}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="ex: john doe"
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="**********"
          />
        </div>
        <button className={styles.submit_btn}>Login</button>
      </div>

      <div className={styles.login_credits}>
        <div className={styles.text}>A Product By</div>
        <img src="/assets/img/global-nexus-of-technology-logo.png" />
      </div>
    </div>
  );
}
