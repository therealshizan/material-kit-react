import React from "react";

import styles from "./revenue-summary.module.css";

export default function RevenueSummary() {
  return (
    <div className={styles.revenue_summary}>
      <div className={styles.head}>
        <div className={styles.title}>Revenue Summary</div>
        <div className={styles.view_all}>
          <button>View Stats</button>
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.caption}>Total Revenue</div>
        <div className={styles.amount}>₹ 51,020.00</div>
      </div>
    </div>
  );
}
