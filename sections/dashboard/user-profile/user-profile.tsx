import React from "react";

import styles from "./user-profile.module.css";

export default function UserProfile() {
  return (
    <div className={styles.user_profile}>
      <div className={styles.greet_user}>
        <span>Hello</span>,<br />
        Shizan
      </div>
      <img src="/assets/img/user_profile.svg" alt="" />
    </div>
  );
}
