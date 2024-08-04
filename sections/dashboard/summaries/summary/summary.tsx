import React from "react";

import styles from "./summary.module.css";

// ---------------------------------------------------------------

interface Props {
  title: string;
  data: { title: string; count: number }[];
}

// ---------------------------------------------------------------

export default function Summary({ title, data }: Props) {
  return (
    <div className={styles.bookings_summary}>
      <div className={styles.head}>
        <div className={styles.title}>{title}</div>
        <div className={styles.view_all}>
          <button>View All</button>
        </div>
      </div>

      <div className={styles.summary}>
        {data &&
          data.map((d) => (
            <div className={styles.period}>
              <div className={styles.caption}>{d?.title}</div>
              <div className={styles.count}>{d?.count}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
