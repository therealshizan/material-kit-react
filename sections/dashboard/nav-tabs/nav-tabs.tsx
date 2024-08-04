import React from "react";

import styles from "./nav-tabs.module.css";

export default function NavTabs() {
  return (
    <div className={styles.nav_tabs}>
      <div className={styles.tab}>
        <div className={styles.icon}>
          <img src="assets/icons/calendar.svg" />
        </div>
        <div className={styles.title}>Bookings</div>
      </div>
      <div className={styles.tab}>
        <div className={styles.icon}>
          <img src="assets/icons/car.svg" />
        </div>
        <div className={styles.title}>Cars</div>
      </div>
      <div className={styles.tab}>
        <div className={styles.icon}>
          <img src="assets/icons/user.svg" />
        </div>
        <div className={styles.title}>Drivers</div>
      </div>
    </div>
  );
}
