"use client";

import React from "react";

import styles from "./navbar.module.css";

interface NavBarProps {
  title: string;
  isLoginPage?: boolean;
  isDashboardPage?: boolean;
}

export default function Navbar({
  isLoginPage,
  title,
  isDashboardPage,
}: NavBarProps) {
  return (
    <div className={`${styles.navbar} ${isLoginPage ? styles.login_page : ""}`}>
      {!isLoginPage && (
        <span style={{ visibility: isDashboardPage ? "hidden" : "visible" }}>
          <img src="/assets/icons/back.svg" alt="" />
        </span>
      )}
      <span className={styles.title}>{title}</span>
      {!isLoginPage && (
        <span>
          <img src="/assets/icons/settings.svg" alt="" />
        </span>
      )}
    </div>
  );
}
