import React from "react";

import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";

export default function HomePage() {
  return (
    <div className={`screen ${styles.home_screen}`}>
      {/* <Navbar isLoginPage /> */}
    </div>
  );
}
